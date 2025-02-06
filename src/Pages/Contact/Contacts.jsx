import React from 'react'
import Container from '../../Components/Container/Container'
import CenterHeaderText from '../../Components/AboutUs/CenterHeaderText'
import ContactInfo from '../../Components/ContactUS/ContactInfo'
import GoogleMap from '../../Components/ContactUS/GoogleMap'
import ContactForm from '../../Components/ContactUS/ContactForm'

const Contacts = () => {
  return (
    <Container>
       <p className="text-center text-7xl">Banner Sections </p>
       <CenterHeaderText firstWord="Get In" secundWord="Touch" content="Please select a topic below related to you inquiry. If you don't fint what you need, fill out our contact form." />
       <ContactInfo />
      <div className='flex gap-10 my-20 items-center'>
      <GoogleMap />
      <ContactForm />
      </div>
    </Container>
  )
}

export default Contacts
