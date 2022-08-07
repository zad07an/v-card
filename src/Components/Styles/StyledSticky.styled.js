import styled from "styled-components";


export const StyledSticky = styled.i`



  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  z-index: 1000;
  background: #343740;
  border-bottom-left-radius: 55px;
  border-bottom-right-radius: 55px;


.icon{
  font-size: 35px;
  color: #FCBE67;
  cursor: pointer;
  animation: stickyIcon 1s infinite alternate;
}

.icon{
  /* animation: fadeIcon 0.3s alternate; */
}

@keyframes fadeIcon {
  0%{
    opacity: 0;
  }
  25%{
    opacity: 0.25;
  }
  50%{
    opacity: 0.5;
  }
  75%{
    opacity: 0.75;
  }
  100%{
    opacity: 1;
  }
}

@keyframes stickyIcon{
  0%{
    transform: translateY(0px);
  }
  10%{
    transform: translateY(-1px);
  }
  20%{
    transform: translateY(-2px);
  }
  30%{
    transform: translateY(-3px);
  }
  40%{
    transform: translateY(-4px);
  }
  50%{
    transform: translateY(-5px);
  }
  60%{
    transform: translateY(-6px);
  }
  70%{
    transform: translateY(-7px);
  }
  80%{
    transform: translateY(-8px);
  }
  90%{
    transform: translateY(-9px);
  }
  100%{
    transform: translateY(-10px);
  }

}

`