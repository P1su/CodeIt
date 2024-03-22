import {createGlobalStyle} from 'styled-components'

//css처럼 작성해주어야 함
const GlobalStyle = createGlobalStyle`
    button{
        border-style: solid;
        background-color: white;
        &:hover{
            cursor: pointer;
        };
    },
    img{
        
          
    }
    
`

export default GlobalStyle
