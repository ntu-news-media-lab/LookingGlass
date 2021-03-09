import TLError from "../core/TLError"
import { fetchCSV } from '../core/CSV';
import { trim, isEmptyObject, mergeData, trace } from "../core/Util";



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

// /**
//  * Given a Google Sheets URL (or mere document ID), read the data and return
//  * a Timeline JSON file suitable for instantiating a timeline.
//  * 
//  * @param {string} url 
//  */
// export async function readGoogleAsCSV(url, sheets_proxy) {

//     let rows = []

//     url = makeGoogleCSVURL(url)
//     let error = null;

//     await fetchCSV({
//         url: `${sheets_proxy}${url}`,
//     }).then(d => {
//         rows = d;
//     }).catch(error_json => {
//         if (error_json.proxy_err_code == 'response_not_csv') {
//             throw new TLError('Timeline could not read the data for your timeline. Make sure you have published it to the web.')
//         }
//         throw new TLError(error_json.message)
//     })

//     let timeline_config = { 'events': [], 'errors': [], 'warnings': [], 'eras': [] }

//     rows.forEach((row, i) => {
//         try {
//             if (!isEmptyObject(row)) {
//                 let event = extractEventFromCSVObject(row)
//                 handleRow(event, timeline_config)
//             }
//         } catch (e) {
//             if (e.constructor == TLError) {
//                 timeline_config.errors.push(e);
//             } else {
//                 if (e.message) {
//                     e = e.message;
//                 }
//                 let label = row['Headline'] || i
//                 timeline_config.errors.push(e + `[${label}]`);
//             }
//         }
//     });
//     console.log(timeline_config);
//     return timeline_config
// }