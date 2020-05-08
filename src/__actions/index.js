import fetch from 'axios';

//TODO: for test. Change actions accordingly
export const FETCHDATA = 'FETCHDATA'

export function fetchSomething(data) {
  return {
    type: FETCHDATA,
    data: data
  }
}

export function someFetch() {
    fetch.get("https://api.apitore.com/api/9/word2vec-neologd-jawiki/distance",{
        headers: {
            "Accept": "*/*",
            withCredentials: true,
        }}).then((data) => fetchSomething(data)).catch(() => fetchSomething({error: true}))
}