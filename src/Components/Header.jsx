
import StyledHeader from "./Styles/StyledHeader.styled";
import { StyledProfile, Image } from "./Styles/StyledProfile.styled";
import {StyledUserName, HeyThere, HeyThereBox, UserName, Front} from './Styles/StyledUserName.styled'



export default function Header() {



  return (
    <>
    <StyledHeader  >
      <StyledProfile>
        <Image src="https://avatars.githubusercontent.com/u/107490932?s=400&u=04e0e071fecb348a85b1c790edd063bb3eefc081&v=4" />
      </StyledProfile>
      <StyledUserName>
        <HeyThereBox>
          <HeyThere>Hey There!</HeyThere>
          <img src="https://cdn-icons-png.flaticon.com/512/2165/2165797.png" alt="Hello Icon" />
        </HeyThereBox>
      <UserName><span>I'm</span> Aram Zadoyan</UserName>
        <Front>{'< Front - End Developer />'}</Front>
      </StyledUserName>
    </StyledHeader>
    </>
  )
}




