import styled from "styled-components"
import Button from "./Button"

const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

const Category = (props) => {
    return(
        <>
            {categories.map((item)=>
                <Button key={item}
                onClick={()=>{props._setCategory(item)}}
                name={item}
                >{item}
                </Button>
            )}
            
        </>
    )
}


export default Category
