import Head from 'next/head'
import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle,AiFillYoutube} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode ] = useState(false);

  return (
    <div  className={darkMode ? "dark" : ""}>
      <Head>
        <title>NavProtfolio </title>
      
      </Head>

      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'  >
        <section className=' min-h-screen'>  
          <nav className=' py-10 flex justify-between mb-12' >
            <h1 className=' text-xl font-burtons md:text-4xl'>Developedbyted</h1>
            <ul className=' flex items-center'>
              <li className=' cursor-pointer text-2xl'>
                <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)}/>
              </li>
              <li>
                <a href='#' className=' bg-gradient-to-r from-cyan-500 to-teal-600 text-2xl text-white rounded-md px-2 ml-8 '> RESUME</a>

              </li>
            </ul>
          </nav>

          <div className=' text-center p-10'>
            <h2 className=' text-5xl text-teal-500 md:text-6xl'> Demitro Marcxco</h2>
            <h3 className=' text-2xl py-5 md:text-3xl'> Developer and Freelancer</h3>
            <p className=' py-3 md:text-xl leading-8'> Freelancer and Developer providing free progarming services and learning conatent . Join me down below and let's get cracking.</p>
          </div>
          <div className=' text-5xl py-3 flex justify-center gap-16 text-gray-600'>

          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillGithub />
          
          </div>
          <div className=' bg-gradient-to-b from-teal-500 relative mx-auto h-80 w-80 mt-20 overflow-hidden rounded-full md:h-96 md:w-96'>
            <Image  className=' justify-center' src={deved} layout = "fill" objectFit='cover'></Image>
          </div>


          
          <h1 className=' bg-blue-300'> Hello ! There </h1>
          </section>
    
      </main>

      
    </div>
  )
}
