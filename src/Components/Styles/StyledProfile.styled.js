import styled from "styled-components";

const StyledProfile = styled.div`

  width: 200px;
  height: 200px;
  border-radius: 25%;
  overflow: hidden;



@media (max-width: 412px) {

  width: 200px;
  height: 200px;
  border-radius: 25%;
  overflow: hidden;
}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.4ms filter 0.4ms;

  &:hover{
    transform: scale(1.2);
    filter: brightness(0.4);
  }
`

export {StyledProfile, Image};