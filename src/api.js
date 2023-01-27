import axios from 'axios'


const searchImages = async (term) => {
    const client_api_key = process.env.REACT_APP_API_KEY
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: client_api_key
        },
        params: {
            query: term
        }
    });
    return response.data.results;
}

export default searchImages;