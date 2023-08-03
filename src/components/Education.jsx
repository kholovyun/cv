import React, { useState } from 'react';
import diploma from '../assets/ed/readyDip.png';
import tabel from '../assets/ed/readytab.png';

import './Education.css'
import Modal from './Modal';

const Education = () => {
    const [image, setImage] = useState('') 
    const [modal, setModal] = useState(false)

    const setModalWin = (imageLink) => {
        setImage(imageLink)
        setModal(true)
    }
    const closeModalWin = () => {
        setModal(false)
    }
  return (
    <div name='education' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Education</p>
            <div className='education_block'>
                <img onClick={() => {setModalWin(diploma)}} className='diploma' src={diploma} alt="#" />
                <img onClick={() => {setModalWin(tabel)}} className='tabel' src={tabel} alt="#" />
            </div>
        </div>
        {modal? <Modal
            imageLink = {image}
            close = {() => closeModalWin()}
        />
    :
    null
    
    }
    </div>
  );
};

export default Education;
