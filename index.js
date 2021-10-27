const TikTokScraper = require('tiktok-scraper');

// Get posts related with a specific hashtag. You need to pass hashtag and the number on posts that you want to see.
(async () => {
    try {
        const posts = await TikTokScraper.hashtag('#milydance', { number: 100 });
        console.log(posts);
    } catch (error) {
        console.log(error);
    }
})();


// Get user profile information. You need to pass tiktok username. e.g: milydance.oficial
(async () => {
    try {
        const user = await TikTokScraper.getUserProfileInfo('milydance.oficial');
        console.log(user);
    } catch (error) {
        console.log(error);
    }
})();

// Get single video metadata. You need to pass web video tiktok url. e.g: https://www.tiktok.com/@milydance.oficial/video/6992614939575799045

(async () => {
    try {
        const videoMeta = await TikTokScraper.getVideoMeta('https://www.tiktok.com/@milydance.oficial/video/6992614939575799045');
        console.log(videoMeta);
    } catch (error) {
        console.log(error);
    }
})();
