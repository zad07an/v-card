import styled from "styled-components";

const StyledProfile = styled.div`

  width: 200px;
  height: 200px;
  border-radius: 25%;
  overflow: hidden;
  cursor: pointer;
  transition: all ease 0.3s;
  filter: drop-shadow(0 0 10px #C04C71);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

	&.openPic{
		width: 320px;
		height: 320px;
		margin-bottom: 30px;
    box-shadow: 0px 15px 30px 5px #FCBE67;
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