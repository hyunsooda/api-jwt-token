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


getApiWithToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imh5dW5zb28iLCJwc3dkIjoiMTIzIiwiaWF0IjoxNTQ0MTY3NzUwLCJleHAiOjE1NDQzNDA1NTB9.kVwG8aUecg22glj8SEI-VBZIbeEY-soybscz94IDLQU',
'http://localhost:3000/api/currenttime', result => console.log(result));
