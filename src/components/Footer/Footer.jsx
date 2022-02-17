import React from 'react'
import './Footer.css'
import { AiFillGithub,AiFillFacebook,AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className='Footer'>
      <AiFillGithub className='Footer_icons'/>
      <AiFillFacebook className='Footer_icons'/>
      <AiFillLinkedin className='Footer_icons'/>
      <p className='Footer_p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quia in tempore nemo fuga eligendi veritatis, illum a quidem officia magnam recusandae dolorum dolorem sequi doloribus quod maxime necessitatibus vitae?</p>
    </div>  )
}
