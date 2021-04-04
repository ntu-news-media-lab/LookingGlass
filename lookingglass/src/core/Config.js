import TLError from "../core/TLError"
import { fetchCSV } from '../core/CSV';
import { trim, isEmptyObject, mergeData, trace } from "../core/Util";

// import {linkPreviewGenerator} from "link-preview-generator"
function clean_integer(s) {
    if (s) {
        return s.replace(/[\s,]+/g, ''); // doesn't handle '.' as comma separator, but how to distinguish that from decimal separator?
    }
}


/**
 * Given a Google Sheets URL or a bare spreadsheet key, return a URL expected
 * to retrieve a CSV file, assuming the Sheets doc has been "published to the web".
 * No checking for the actual availability is done.
 * @param {string} url_or_key 
 */
export function makeGoogleCSVURL(url_or_key) {
    url_or_key = url_or_key.trim()
    if (url_or_key.match(/^[a-zA-Z0-9-_]+$/)) {
        // key pattern from https://developers.google.com/sheets/api/guides/concepts#spreadsheet_id
        return `https://docs.google.com/spreadsheets/d/${url_or_key}/pub?output=csv`
    }

    if (url_or_key.startsWith('https://docs.google.com/spreadsheets/')) {
        if (url_or_key.match(/\/pub\?output=csv$/)) return url_or_key
        let parsed = new URL(url_or_key)
        let params = new URLSearchParams(parsed.search)
        params.set('output', 'csv')
        if (params.get('gid')) {
            params.set('single', 'true')
        }
        parsed.search = `?${params.toString()}`
        let base_path = parsed.pathname.substr(0, parsed.pathname.lastIndexOf('/'))
        parsed.pathname = `${base_path}/pub`
        return parsed.toString()
    }
    throw new TLError('invalid_url_err', url_or_key);
}

/**
 * Given a Google Sheets URL (or mere document ID), read the data and return
 * a Timeline JSON file suitable for instantiating a timeline.
 * 
 * @param {string} url 
 */
export async function readGoogleAsCSV(url, sheets_proxy) {

    let rows = []

    url = makeGoogleCSVURL(url)
    let error = null;

    await fetchCSV({
        url: `${sheets_proxy}${url}`,
    }).then(d => {
        rows = d;
    }).catch(error_json => {
        if (error_json.proxy_err_code == 'response_not_csv') {
            throw new TLError('Timeline could not read the data for your timeline. Make sure you have published it to the web.')
        }
        throw new TLError(error_json.message)
    })



    let topic_list_config = { 'events': [], 'errors': [], 'warnings': [], 'eras': [],'topics':[] }

    rows.forEach((row, i) => {
        
        try {
            if (!isEmptyObject(row)) {
                let event = extractEventFromCSVObject(row)
                handleRow(event, topic_list_config)
                
            }
        } catch (e) {
            if (e.constructor == TLError) {
                topic_list_config.errors.push(e);
            } else {
                if (e.message) {
                    e = e.message;
                }
                let label = row['Headline'] || i
                topic_list_config.errors.push(e + `[${label}]`);
            }
        }
    });
    let promises = [];
   topic_list_config.topics.forEach((topic,i)=>{
        try{
            if(topic.article_url){
                let fetch_info = null;
                let keyword=topic.topic_keyword;
                let twitter_id = topic.twitter_id;
                let global_cov = topic.global_cov;
                let local = "http://127.0.0.1:5000/"
                // let url = local + `news?url=${topic.article_url}&keyword=${keyword}`;
                let url = `https://looking-glass-backend.herokuapp.com/news?url=${topic.article_url}&keyword=${keyword}`
                promises.push(read_news(url).then(res=>{
                    topic['fetched']= res;
                    res['twitter_id']=twitter_id;
                    res['global_cov']=global_cov;
                    topic_list_config[keyword]= res;
                }))
            }
        }
        catch(e){

        }
    });
    return Promise.all(promises).then(()=>{
        console.log(topic_list_config);
        return topic_list_config
    }
    )
   
}


function handleRow(event, topic_list_config) {
    var row_type = 'event';
    if (typeof(event.type) != 'undefined') {
        row_type = event.type;
        delete event.type;
    }
    topic_list_config.topics.push(event);
   
}


async function read_news(url){
    return new Promise((resolve,) =>{
        window.fetch(url, { mode: 'cors' })
            .then(response=> {
                resolve(response.json());
            })
            .catch(msg=>{
                console.log("error");
            }
            )
    })
}

function extractEventFromCSVObject(orig_row) {

    let row = {}
    Object.keys(orig_row).forEach(k => {
        row[k] = trim(orig_row[k]) // get rid of white-space and reduce all-blank cells to empty strings
    })
    var d = {
    
        topic_keyword:row['page_keyword'] || '',
        article_url:row['main_article_url'] || '',
        global_cov: row['global_coverage'] || "",
        twitter_id:row['twitter_url'] || "",

    }

    if (row['twitter_url']) {
        let split_url = row['twitter_url'].trim().split("/")
        d.twitter_id =split_url[split_url.length-1];
    }
 
    return d
}


export async function youtube_video(keyword){
    let domain = "https://looking-glass-backend.herokuapp.com"
    let keyword_cleaned = keyword.trim().replace(" ", "+");
    // let domain = "http://127.0.0.1:5000";
    let url = `${domain}/videos?keyword=${keyword_cleaned}`;
    let res = null;
        return new Promise((resolve,) =>{
            window.fetch(url, { mode: 'cors' })
                .then(response=> {
                    res = response.json();
                    console.log(res);
                    resolve(res);
                })
                .catch(msg=>{
                    console.log("error in resolving");
                }
                )
        })
}

export async function global_coverage_search(keyword){
    // let domain = "https://looking-glass-backend.herokuapp.com"
    let keyword_cleaned = keyword.trim().replace(" ", "+");
    let domain = "http://127.0.0.1:5000";
    let url = `${domain}/global?keyword=${keyword_cleaned}`;
    let res = null;
        return new Promise((resolve,) =>{
            window.fetch(url, { mode: 'cors' })
                .then(response=> {
                    res = response.json();
                    console.log(res);
                    resolve(res);
                })
                .catch(msg=>{
                    console.log("error in resolving");
                }
                )
        })
}