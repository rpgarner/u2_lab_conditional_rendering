import './styles/App.css'
import { useState } from 'react'
import Form from './components/Form'
import LandingPage from './components/LandingPage'
import Info from './components/Info'
import ErrorPage from './components/ErrorPage'

const App = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [formValues, setFormValues] = useState({ name: '', age: '', email: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    // Uses bracket notation to access a key in state that is a match to the input's name and set's it to the inputs value
   
  }
  
  const incrementPage = () => {
    if (currentPage ==formValues.age < 18) {
      setCurrentPage(100)
    } else {


    setCurrentPage((prevState) => prevState + 1)
    }
  }

  let myPage

  if (currentPage === 0) {
    myPage =  <LandingPage incrementPage={incrementPage}/>
  } else if (currentPage === 1) {
    myPage = <Info         
                currentPage={currentPage}
                name={formValues.name}
                age={formValues.age}
                email={formValues.email}
                incrementPage={incrementPage}
                handleChange={handleChange}
                />
  } else if (currentPage === 100) {
    
  }



  

  return (
    <div className="App">
     
     
      <Form
        currentPage={currentPage}
        name={formValues.name}
        age={formValues.age}
        email={formValues.email}
        incrementPage={incrementPage}
        handleChange={handleChange}
      />
    {myPage}
    </div>
  )
}

export default App
