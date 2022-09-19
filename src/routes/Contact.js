import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Let's Connect have a Chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact