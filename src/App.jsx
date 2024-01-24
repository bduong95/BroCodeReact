import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'

function App() {
  
  return(
    // <> Is called a fragment </> 
    <>
      <Header></Header>
      <Food></Food>
      <Footer></Footer>
      <Card></Card>
      <Student name="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={32} isStudent={false}></Student>
      <Student name="Squidward" age={38} isStudent={false}></Student>
      <Student name="Sandy" age={27} isStudent={true}></Student>
      <Student name="Larry"></Student>
    </>
  )
}

export default App
