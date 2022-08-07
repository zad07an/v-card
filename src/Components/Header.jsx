
import StyledHeader from "./Styles/StyledHeader.styled";
import { StyledProfile, Image } from "./Styles/StyledProfile.styled";
import {StyledUserName, HeyThere, HeyThereBox, UserName, Front} from './Styles/StyledUserName.styled'



export default function Header() {



  return (
    <>
    <StyledHeader  >
      <StyledProfile>
        <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
      </StyledProfile>
      <StyledUserName>
        <HeyThereBox>
          <HeyThere>Hey There!</HeyThere>
          <img src="/hello.png" alt="Hello Icon" />
        </HeyThereBox>
      <UserName><span>I'm</span> Aram Zadoyan</UserName>
        <Front>{'< Front - End Developer />'}</Front>
      </StyledUserName>
    </StyledHeader>
    </>
  )
}




