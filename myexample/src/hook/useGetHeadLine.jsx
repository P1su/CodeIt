import axios from 'axios'

import { useEffect } from "react";
import { API } from '../config';

export const useGetHeadLine = (category, setData, setLoading) =>{

    useEffect(()=>{

        const getHeadLine = async()=>{
            try{
                setLoading(true);
                const response = await axios.get(
                    `${API.HEADLINE}?country=kr&category=${category}&pagesize=2&apiKey=${API.KEY}`
                )

                setData(response.data.articles)
            }
            catch(e){
                console.log(e);
            }

        }
        getHeadLine();
        setLoading(false);
    }, [category])

}

