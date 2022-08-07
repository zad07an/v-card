import {FaFacebook, FaInstagram, FaTelegram, FaLinkedin, FaGithub} from 'react-icons/fa'
import { StyledFooter } from './Styles/StyledFooter.styled'


export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <p>Follow Me On Social Pages</p>
        <ul>
          <li><a href="https://www.facebook.com/aram.zadoyan/" target='_blank' rel='noreferrer' title='Facebook'><FaFacebook/></a></li>
          <li><a href="https://www.instagram.com/zad07an_/" target='_blank' rel='noreferrer' title='Instagram'><FaInstagram/></a></li>
          <li><a href="https://t.me/zad07an" target='_blank' rel='noreferrer' title='Telegram'><FaTelegram/></a></li>
          <li><a href="https://www.linkedin.com/in/aram-zadoyan-b3344b247/" target='_blank' rel='noreferrer' title='LinkedIn'><FaLinkedin/></a></li>
          <li><a href="https://github.com/zad07an" target='_blank' rel='noreferrer' title='GitHub'><FaGithub/></a></li>
        </ul>
      </div>
    </StyledFooter>
  )
}