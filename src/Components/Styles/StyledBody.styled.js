import styled from "styled-components";

export const StyledBody = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding-top: 60px;
  /* padding-bottom: 60px; */
  background: #302399;
  border-top-left-radius: 55px;
  border-top-right-radius: 55px;
  


  h3 {
    text-align: center;
    margin-bottom: 15px;
    font-family: 'baloo 2';
    font-size: 25px;
    font-weight: 900;
    color: #fffcff;
  }

  p {

    color: #fffcff;
    font-family: zilla slab;
    font-size: 16px;
    font-weight: bold;
    line-height: 25px;
    letter-spacing: 0.5px;
  }





@media (max-width: 412px) {

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  padding-top: 60px;
  
  div {
    padding: 30px 20px 30px 20px;
    width: 90%;
    background: #0e0f26;
    border-radius: 15px;
  }

  h3 {
    text-align: center;
    margin-bottom: 15px;
    font-family: 'baloo 2';
    font-size: 25px;
    color: #fffcff;
  }

  p {

    color: #fffcff;
    font-family: zilla slab;
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.5px;
  }
}
`


export const BodyBox = styled.div`
  padding: 30px 20px 30px 20px;
  width: 90%;
  background: #0e0f26;
  border-radius: 15px;
  transition: 0.5s;


`