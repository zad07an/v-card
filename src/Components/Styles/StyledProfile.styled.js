import styled from "styled-components";

const StyledProfile = styled.div`

  width: 200px;
  height: 200px;
  border-radius: 25%;
  overflow: hidden;
  cursor: pointer;
  transition: transform 400ms width 400ms height 400ms;

	&.openPic{
		width: 320px;
		height: 320px;
		margin-bottom: 30px;
	}


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

`

export {StyledProfile, Image};