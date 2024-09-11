import styled from "styled-components";

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;  // 자식 요소들이 세로로 쌓이게 설정
    align-items: flex-start;  // 자식 요소들을 왼쪽 정렬
`;
export const UnderBar = styled.div`
    width: 40px;
    height: 3px;
    background-color: #f03b3c;
    margin-top: 25px;
    margin-bottom: 30px;
`;

export const Image = styled.img`
    width: 100%;
    margin: 0;
`;

export const Title = styled.div`
    margin-top: 39px;
    text-align: left;
`;

export const TitleH6 = styled.h6`
    font-size: 30px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #ea0a0b;
    margin: 0;
    
`;

export const SubTitleH6 = styled.h6`
    font-size: 20px;
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #222;
    margin: 0;
`;

export const ContentsP = styled.p`
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    font-style: normal;
    line-height: 26px;
    letter-spacing: normal;
    text-align: justify;
    color: #5b5a5a;
    padding-top: 17px;
    padding-bottom: 27px;
    margin: 0;
`;

