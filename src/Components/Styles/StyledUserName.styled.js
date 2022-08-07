import styled from "styled-components";

export const StyledUserName = styled.div`

  width: 100%;
  height: 200px;
  background: #343740;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;




@media (max-width: 412px) {

  width: 100%;
  height: 200px;
  background: #343740;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
`





export const HeyThereBox = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  gap: 5px;



@media (max-width: 412px) {

  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 30px;
  gap: 5px;
}
`


export const HeyThere = styled.p`


  color: #fffcff;
  font-size: 18px;
  font-weight: bold;
  font-family: zilla slab;
  letter-spacing: 0.5px;


@media (max-width: 412px) {

  color: #fffcff;
  font-size: 18px;
  font-family: zilla slab;
  letter-spacing: 0.5px;
}
`

export const UserName = styled.h3`


  font-size: 40px;
  font-family: Palanquin Dark;
  text-transform: uppercase;
  color: #fffcff;
  letter-spacing: 1px;
  animation: userNameAnimate 3s cubic-bezier(0.215, 0.610, 0.355, 1) infinite alternate;

  @keyframes userNameAnimate{
    from{
      color: #C04C71;
      filter: drop-shadow(0 0 15px #C04C71);
    }
    to{
      color: #FCBE67;
      filter: drop-shadow(0 0 15px #FCBE67);
    }
  }

  span {
    letter-spacing: 1px;
    font-size: 25px;
    font-family: zilla slab;
  }


  @media (max-width: 412px) {


    font-size: 40px;
    font-family: Palanquin Dark;
//    text-transform: uppercase;
    color: #fffcff;

    span {
    letter-spacing: 1px;
    font-size: 25px;
    font-family: zilla slab;
    }
  }
`

export const Front = styled.p`


  font-size: 18px;
  letter-spacing: 1px;
  font-weight: bold;
  font-family: zilla slab;
  color: #fffcff;



  @media (max-width: 412px) {

    font-size: 18px;
    letter-spacing: 1px;
    font-family: zilla slab;
    color: #fffcff;
}
`


