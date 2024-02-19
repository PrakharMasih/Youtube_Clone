const YOUTUBE_API_KEY = "AIzaSyCRg_faqFD-svsOlULSMEFUILIpFt9y8gk"

export const URL = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=' + YOUTUBE_API_KEY


export const AUTO_COMPLETE_API = 'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='

export const AUTO_COMPLETE_API2 = 'https://clients1.google.com/complete/search?client=youtube&hl=en&ds=yt&q='