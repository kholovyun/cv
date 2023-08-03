import React from 'react'
import './Contact.css'

const Contact = () => {
  const telegramUsername = 'Kholov_yun'
  const whatsappNumber = 87074144093
  const phoneNumber = '+77074144093';

  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center  items-center p-4'>
      <div className='info'>
      <a className='link' href={`https://t.me/${telegramUsername}`} target="_blank" rel="noopener noreferrer">
        Write to Telegram
      </a>
    <a className='link' href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
        Write to WhatsApp
    </a>
    <button className='link' onClick={() => handlePhoneCall()}>
        Make a call
    </button>
    </div>
    </div>
  )
}

export default Contact