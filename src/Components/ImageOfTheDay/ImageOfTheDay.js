import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PageContainDiv = styled.div`
  margin: 0 20px;
`;

const ImgTitle = styled.h2`
  color: #373737;
  font-size: 28px;
  padding: 20px 0;
`;

const ImgDate = styled.p`
  color: #373737;
  font-size: 20px;
  padding: 10px 0;
`;

const ImgDetails = styled.p`
  color: #373737;
  font-size: 20px;
  padding: 30px 0 10px;
`;

const ImgCopyright = styled.p`
  color: #373737;
  font-size: 20px;
  padding: 10px 0;
`;


function ImageOfTheDay(props) {
  
  return (
    <PageContainDiv>
      <div>
        <ImgTitle>{props.title}</ImgTitle>
        <ImgDate>Date: {props.date}</ImgDate>
      </div>

      <div>
        <img src={props.url} alt={'NASA Photo of the Day'}></img>
      </div>

      <div>
        <ImgDetails>Explanation: {props.explanation}</ImgDetails>
      </div>

      <div>
        <ImgCopyright>{props.copyright}</ImgCopyright>
      </div>
    </PageContainDiv>
  )
}

export default ImageOfTheDay;
