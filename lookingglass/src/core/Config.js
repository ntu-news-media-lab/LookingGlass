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



    let topic_list_config = { 'events': [], 'errors': [], 'warnings': [], 'eras': [],'topics':[],'fetched_info':[] }

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
    console.log(topic_list_config);

    topic_list_config.topics.forEach((topic,i)=>{
        try{
            if(topic.article_url){
                let fetch_info = null;
                let keyword=topic.topic_keyword
                let url = `http://127.0.0.1:5000/news?url=${topic.article_url}&keyword=${keyword}`
                read_news(url).then(res=>{
                    topic_list_config.fetched_info.push(res);
                })
                
        
            }
        }
        catch(e){

        }
    });
    
    return topic_list_config
}


function handleRow(event, timeline_config) {
    var row_type = 'event';
    if (typeof(event.type) != 'undefined') {
        row_type = event.type;
        delete event.type;
    }
    timeline_config.topics.push(event);
    console.log(event.article_url)

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
        // media: {
        //     caption: row['Media Caption'] || '',
        //     credit: row['Media Credit'] || '',
        //     url: row['Media'] || '',
        //     thumbnail: row['Media Thumbnail'] || ''
        // },
        // text: {
        //     headline: row['Headline'] || '',
        //     text: row['Text'] || ''
        // },
        // display_date: row['Display Date'] || '', // only in v3 but no problem
        // group: row['Group'] || row['Tag'] || '', // small diff between v1 and v3 sheets
        // // background: interpretBackground(row['Background']), // only in v3 but no problem
        // type: row['Type'] || '',
        topic_keyword:row['page_keyword'] || '',
        article_url:row['main_article_url'] || '',
        gobal_cov: row['global_coverage'] || ""

    }

    // if (Object.keys(row).includes('Start Date') || Object.keys(row).includes('End Date')) {
    //     // V1 date handling
    //     // if (row['Start Date']) {
    //     //     d.start_date = parseDate(row['Start Date'])
    //     // }
    //     // if (row['End Date']) {
    //     //     d.end_date = parseDate(row['End Date'])
    //     // }
    // } else {
    //     // V3 date handling
    //     // every date must have at least a year to be valid.
    //     if (row['Year']) {
    //         d.start_date = {
    //             year: clean_integer(row['Year']),
    //             month: clean_integer(row['Month']) || '',
    //             day: clean_integer(row['Day']) || ''
    //         }
    //     }
    //     if (row['End Year']) {
    //         d.end_date = {
    //             year: clean_integer(row['End Year']) || '',
    //             month: clean_integer(row['End Month']) || '',
    //             day: clean_integer(row['End Day']) || ''
    //         }
    //     }

    //     if (row['Time']) {
    //         // if (d.start_date) {
    //         //     mergeData(d.start_date, parseTime(row['Time']));
    //         // } else {
    //         //     throw new TLError("invalid_start_time_without_date")
    //         // }
    //     }

    //     if (row['End Time']) {
    //         // if (d.end_date) {
    //         //     mergeData(d.end_date, parseTime(row['End Time']));
    //         // } else {
    //         //     throw new TLError("invalid_end_time_without_date")
    //         // }
    //     }

    //     // if (d.start_date && !validDateConfig(d.start_date)) {
    //     //     throw new TLError("invalid_date_err")
    //     // }

    //     // if (d.end_date && !validDateConfig(d.end_date)) {
    //     //     throw new TLError("invalid_date_err")
    //     // }


    return d
}
