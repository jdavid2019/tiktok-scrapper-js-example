const TikTokScraper = require('tiktok-scraper');


//https://github.com/drawrowfly/tiktok-scraper

// Search hastags
/*(async () => {
    try {
        const posts = await TikTokScraper.hashtag('#milydance', { number: 100 });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();*/


// User information
/*(async () => {
    try {
        const user = await TikTokScraper.getUserProfileInfo('milydance.oficial');
        console.log(user);
    } catch (error) {
        console.log(error);
    }
})();*/

// Get single video metadata
// input - WEB_VIDEO_URL
// For example: https://www.tiktok.com/@milydance.oficial/video/6992614939575799045
// options - not required
(async () => {
    try {
        const videoMeta = await TikTokScraper.getVideoMeta('https://www.tiktok.com/@milydance.oficial/video/6992614939575799045');
        console.log(videoMeta);
    } catch (error) {
        console.log(error);
    }
})();