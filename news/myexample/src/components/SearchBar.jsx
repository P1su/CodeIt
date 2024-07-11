import  * as api  from '../util/api';
import styled from 'styled-components';

const SearchBar = (props) => {
    return(
        <>
            <InputDate placeholder='검색어를 입력하세요'
            onChange={(e)=>props.setQuery(e.target.value)}
            
            ></InputDate>
            
            <SearchButton type="button"
            onClick={()=>{api.getResponse(props.query, props.setData, props.setLoading)}}
            >
                검색하기
            </SearchButton>   
        </>

    )
}

export default SearchBar

const InputDate = styled.input`
    margin: 20px;
`
const SearchButton = styled.button`

`