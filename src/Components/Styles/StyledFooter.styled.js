import styled from "styled-components";

export const StyledFooter = styled.footer`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  background: linear-gradient(to top, #C04C71, #FCBE67);



  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  p {
    font-size: 22px;
    font-weight: bold;
    font-family: tajawal;
    color: #fafafa;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 100px;
  }

  a {
    font-size: 30px;
    color: #fafafa;
  }



  @media (max-width: 412px) {

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 30px;


    div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    p {
      font-size: 22px;
      font-weight: bold;
      font-family: tajawal;
      color: #fafafa;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      height: 100px;
    }

    a {
      font-size: 30px;
      color: #fafafa;
    }
  }
`