import { GlobalStyles } from './Components/Styles/Global.styled'
import { StyledContainer } from './Components/Styles/StyledContainer.styled'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'



function App() {


  return (
    <>
    <StyledContainer>
      <GlobalStyles/>
      <Header/>
      <Body/>
      <Footer/>
    </StyledContainer>
    </>
  )
}

export default App
