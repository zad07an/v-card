import React, {useState, useEffect} from 'react';
import {FaChevronUp} from 'react-icons/fa';
import { StyledSticky } from './Styles/StyledSticky.styled';


const Sticky = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    })
  }, []);

  const scrollTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StyledSticky>
      {" "}
      {showScroll && ( <FaChevronUp className='icon'
      onClick={scrollTop}
      style={{display: showScroll ? 'flex' : 'none'}}/> )}{" "}
    </StyledSticky>
  );
}

export default Sticky;