const axios = require('axios');

async function getApiWithToken(token, url, callback) {
    try {        
        axios.defaults.headers.common['Authorization'] = token;
        const {data} = await axios.get(url);
        callback(data);
    } catch (error) {
        throw error;
    }
}

module.export = getApiWithToken;
