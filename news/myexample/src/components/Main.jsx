import { useState, useEffect } from 'react';
import {useGetHeadLine}  from '../hook/useGetHeadLine';
import { API } from '../config';

import axios from 'axios';
import styled from 'styled-components';

import NewsList from './NewsItem';
import Category from './Category';
import Button from './Button';
import SearchBar from './SearchBar';

import  * as api  from '../util/api';

const Main = () =>{
    const [category, setCategory] = useState("");
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useGetHeadLine(category,setData, setLoading);

    if(loading){
        return <p>로딩 중입니다.</p>
    }

    return(
        <>
            <Category _setCategory = {setCategory}/>
            
            <SearchBar setQuery={setQuery}
            query={query}
            setData={setData}
            setLoading={setLoading}
            ></SearchBar>

            <>  
                {data.map((news)=>

                    <NewsList _news = {news} key={news.title}></NewsList>
                )}
            </> 


        </>
    )
}

export default Main