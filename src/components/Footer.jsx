import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='text-center p-5 mt-10'>
      <div className='flex space-x-4 text-xl justify-center'>
      <a href=""><FaFacebookSquare /></a>
      <a href=""><FaInstagram /></a>
      <a href=""><FaTwitter /></a>
      <a href=""><FaLinkedin /></a>
      </div>
      <p>copyright &copy; 2024 All Right Reserved</p>
    </div>
  )
}
