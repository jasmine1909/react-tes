import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({title, description,leftBtnText,rightBtnText,backgroundImg}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
         <ItemText>
           <h1>{title}</h1>
           <p>{description}</p>
        </ItemText>
          
      </Fade>
      
      <Buttons> 
        <Fade bottom>
         <ButtonGroup>
             <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rightBtnText && 
                <RightButton>
                {rightBtnText}
                 </RightButton>
            }
          </ButtonGroup>  
        </Fade> 
          <DownArrow src="images/down-arrow.svg" />
      </Buttons>
      

    
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
       z-index:10;
       width:100vw;
       height:100vh;
       background-size:cover;
       background-position:center;
       background-repeat:no-repeat;
       background-image: ${props => ` url("/images/${props.bgImage}")`};
       display:flex;
       flex-direction:column;
       justify-content:space-between;
       align-items:center;
`

const ItemText = styled.div`
       padding-top:15vh;
       text-align:center;
       z-index:10;

`
const ButtonGroup = styled.div`
        
       

`

const LeftButton= styled.div`
        background-color:rgba(23,26,32,0.8);
        height:40px;
        width:256px;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:100px;
        opacity:0.85 ;
        text-transform:uppercase;
        font-size:12px;
        margin:1rem;
        `
const RightButton = styled(LeftButton)`
         background-color:white;
         opacity:0.65;
         color:black;
`
const DownArrow = styled.img`

height:50px;
animation: animationDown infinite 1.5s;
overflow-x:hidden;
`
const Buttons = styled.div`

`