// const domain = '';
const domain = 'https://vospitanie.mosmetod.ru/';

const api = {
    // example: `${domain}/api/example`,
    practicesCount: `${domain}/api/get-educational-practices-count`,
    practicesList: `${domain}/api/get-educational-practices`,
    practicesItem: `${domain}/api/get-educational-practice`,
    practicesComments: `${domain}/api/get-comments`,
    addLikeForPracticeUrl: `${domain}/api/add-like-for-practice`,
    addLikeForCommentsUrl: `${domain}/api/add-like-for-comments`,
    rating: `${domain}/api/get-top-five`,
    userData: `${domain}/api/get-user`,
    lastNews: `${domain}/api/get-list-news`,
    allNews: `${domain}/api/get-all-news`,
    newsCount: `${domain}/api/get-all-news-count`,
    newsItem: `${domain}/api/get-news`,
}

export default api;
