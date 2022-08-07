import { useState } from "react"
import { BodyBox, StyledBody } from "./Styles/StyledBody.styled"
import Sticky from "./Sticky";

export default function Body() {


  const [box1, setBox1] = useState(false);

  const toggleBox1 = () => {
    setBox1(!box1)
  }



  const [box2, setBox2] = useState(false);

  const toggleBox2 = () => {
    setBox2(!box2)
  }

  const [box3, setBox3] = useState(false);

  const toggleBox3 = () => {
    setBox3(!box3)
  }


  return (
    <>
    <StyledBody>
      <BodyBox className={box1 ? 'active' : ''} onClick={toggleBox1}>
        <h3>About Me</h3>
        <p>{`I'm Aram Zadoyan, 21 years old and I'm from Ararat region, Vedi city.`}<br/>{`I know HTML, CSS, JavaScript, Python(learned half at home) and now i'm learning React - JS⚛️.`}</p>
      </BodyBox>
      <BodyBox className={box2 ? 'active' : ''} onClick={toggleBox2}>
      <h3>About Previous Update</h3>
        <p>{`Previous update was made with HTML, CSS and JavaScript.`}</p>
      </BodyBox>
      <BodyBox className={box3 ? 'active' : ''} onClick={toggleBox3} >
      <h3>About This New Update</h3>
        <p>{`This new update is made with React - JS.`}
        <br />{`- Style is given by Styled-Components <💅>.`}
        </p>
      </BodyBox>
    </StyledBody>
    <Sticky/>
    </>
  )
}