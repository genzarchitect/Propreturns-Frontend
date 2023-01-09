import React,{useState} from 'react'
import avatar from '../public/avatar.jpeg'
import heart from '../public/heart.png'
import logo from '../public/propreturns.png'
import Image from 'next/image'
import dark from '../public/night-mode.png'
import light from '../public/light.png'
import logo1 from '../public/logo1.png'
import heartr from '../public/heart-r.png'
import {motion} from 'framer-motion';

const Navbar = ({darkMode,setDarkMode}) => {

  const handleClick = ()=>{

    setDarkMode(!darkMode);

  }

  const [like,setLike]=useState(false);

  const handleClick1 = ()=>{

    setLike(!like);

  }


  return (
    <div>
        <header className={`text-gray-600 body-font ${darkMode?'bg-[#111827]':'bg-white'} `}>
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center sm:overflow-x-hidden ">
    <motion.a animate={{x:0,opacity:1}} initial={{x:-10,opacity:0}} transition={{duration:1,delay:2}} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {
        darkMode?<Image src={logo1} alt='logo' width={198.2} height={58.9} /> :<Image src={logo} alt='logo' width={198.2} height={58.9} />
      }
      
    </motion.a>
    <motion.nav animate={{opacity:1}} initial={{opacity:0}} transition={{duration:1,delay:1.75}} className="md:ml-auto md:mr-auto ml-10 flex flex-wrap items-center text-base justify-center">
      <a className="mr-10  font-semibold  underline underline-offset-4 text-[#468fd1]  ">Search</a>
      <a className={`mr-10  font-semibold  cursor-pointer ${darkMode?'text-[#979eaa]':'text-[#868686] '}`}>About</a>
      <a className={`mr-10  font-semibold  cursor-pointer ${darkMode?'text-[#979eaa]':'text-[#868686] '}`}>Help</a>
      <a className={`mr-10 lg:mt-0 mt-4  font-semibold  cursor-pointer ${darkMode?'text-[#979eaa]':'text-[#868686] '}`}>Real Estate Agents</a>
      <a className={`mr-10 lg:mt-0 mt-4 font-semibold  cursor-pointer ${darkMode?'text-[#979eaa]':'text-[#868686] '}`}>Blog</a>
    </motion.nav>
    <span className='flex lg:mt-0 mt-5 ' >

    <motion.button animate={{y:0,opacity:1}} initial={{y:-10,opacity:0}} transition={{duration:1}} className={`mr-10  rounded-xl pt-2 pb-0.5 px-4 ${darkMode?'border border-[#979eaa]':'border border-slate-800'} `} onClick={handleClick} >
      {darkMode? <Image src={light} alt='icon' width={16} height={16} />:<Image src={dark} alt='icon' width={16} height={16} />}
    </motion.button>
    
    <motion.div animate={{y:0,opacity:1}} initial={{y:-10,opacity:0}} transition={{duration:1,delay:0.5}} onClick={handleClick1} className='mr-10 mt-2 cursor-pointer' >
    {like?<Image src={heartr} alt='heart' width={25} height={25} />:<Image src={heart} alt='heart' width={25} height={25} />}
    </motion.div>
      
      <motion.span animate={{y:0,opacity:1}} initial={{y:-10,opacity:0}} transition={{duration:1}} >

        <Image src={avatar} alt='avatar' width={40} height={40}  className='rounded-full'  />
      </motion.span>

    </span>
   
  </div>
</header>
    </div>
  )
}

export default Navbar