import React from "react";
import styled from "styled-components";

const Reviews = () => {
  const Wrapper = styled.section`
   

      .food-card{
        transition: .2s;
        border: 1px solid lightgray;
        width: 460px;
        padding: 10px;
        margin: 10px;
        border-radius: 14px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    // .food-card:hover{
    //     transform: rotate(3deg);
    //     width: 290px;
    //     border-radius: 20px;
    //     border: 1px solid white;
    //     box-shadow: 4px 8px 16px 8px #eee;
    // }


    .food-card-img{
        width: 100%;
        border-radius: 14px;
    }
    .flex{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    } 
      
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">⭐REVIEWS</h2>

      {


<div class="flex">
        <div class="food-card">
            <img src="/images/reviews/rev1.png" class="food-card-img" alt=""></img>
            
        </div>
        <div class="food-card">
            <img src="/images/reviews/rev2.png" class="food-card-img" alt=""></img>
            
        </div>
        <div class="food-card">
            <img src="/images/reviews/rev3.png" class="food-card-img" alt=""></img>
            
        </div>
        <div class="food-card">
            <img src="/images/reviews/rev4.png" class="food-card-img" alt=""></img>
            
        </div>
    </div>


           
                 
                  
      }
    </Wrapper>
  );
};

export default Reviews;
