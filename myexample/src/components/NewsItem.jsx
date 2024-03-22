import styled from 'styled-components';

const NewsItem=(props)=>{

    return(
        <>
            <Wrapper>
                <ImgBox src={props._news.urlToImage} alt="미리보기" />

                <ArticleBox onClick={ () =>window.open(props._news.url) } >
                    
                    <TitleBox>{props._news.title}</TitleBox>
                    <ContentBox>{props._news.description}</ContentBox>

                </ArticleBox>
            </Wrapper>
        </>
 
        

    )
    
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    
`

const ImgBox = styled.img`
    width: 10rem;
    height: 10rem;

`;
const ArticleBox = styled.div`
    font-size: 0.9rem;
    text-align: left;
    width: 40rem;
    cursor:pointer;
`;

const TitleBox = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom:1.4rem;

`;
const ContentBox = styled.div`
    font-size: 0.9rem;
`;

export default NewsItem