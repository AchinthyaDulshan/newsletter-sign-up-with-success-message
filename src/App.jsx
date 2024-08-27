import React from 'react'
import NewsLetterSignupCard from './components/NewsLetterSignupCard'
import ThanksForSubscribingCard from './components/ThanksForSubscribingCard'
import useEmailValidation from './utils/useEmailValidation'

const App = () => {

  
  return (
    <div className='md:bg-Charcoal-Grey w-screen min-h-dvh flex justify-center items-center'>
      <NewsLetterSignupCard/>
    </div>
  )
}

export default App