import axios from 'axios'
import { API } from '../config';

export const getResponse= async (query, setData, setLoading) => {
    
    try{
        setLoading(true);

        const response = await axios.get(
            `${API.EVERY}?q=${query}&pagesize=2&apiKey=${API.KEY}`

        )
        setData(response.data.articles)
    }
    catch(e){
        console.log(e);
    }

    setLoading(false);
}

