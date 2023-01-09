import {useState} from 'react'
import Head from "next/head";
import house from "../public/house.jpg";
import house2 from "../public/house2.jpg";
import house3 from "../public/house3.jpg";
import house4 from "../public/house4.jpg";
import Image from "next/image";
import bed from "../public/bed.png";
import bathtub from "../public/bathtub.png";
import tape from "../public/tape.png";
import heart from "../public/heart.png";
import heartr from "../public/heart-r.png";
import {motion} from 'framer-motion';
import {getPosts} from '../services/index'
import Link from 'next/link'

export default function Home({darkMode,posts}) {

  const[like,setLike]=useState(false);

  const heartClick = ()=>{

    setLike(!like);

  }
  const[like1,setLike1]=useState(false);

  const heartClick1 = ()=>{

    setLike1(!like1);

  }
  const[like2,setLike2]=useState(false);

  const heartClick2 = ()=>{

    setLike2(!like2);

  }
  const[like3,setLike3]=useState(false);

  const heartClick3 = ()=>{

    setLike3(!like3);

  }

  return (
    <div>
      <Head>
        <title>PropReturns</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={`flex flex-wrap ${darkMode?'bg-[#111827]':'bg-white'} `}>
        <div className="lg:grid lg:grid-cols-[0.7fr,0.7fr]">
          <motion.div animate={{y:0,x:0,opacity:1}} initial={{y:-15,x:-15,opacity:0}} transition={{duration:1,delay:1.5}} whileHover={{
            position:'relative',
            zIndex:1,
            scale:1.1,
            transition:{
              duration:.2,
            
            }
          }} className={`max-w-sm rounded-xl overflow-hidden shadow-lg mt-10 lg:ml-5 mx-2  relative ${darkMode?' border border-[#1e2534]':'border-none'} `} >
            <Image className=" rounded-xl " src={house} alt="img" height={2000} />
            <span className=" absolute left-2 top-2 inline-block bg-green-400 rounded-lg px-3 py-1.5 text-xs font-semibold  mr-2 mb-2 text-white ">
              {" "}
              New
            </span>
            <span className=" absolute left-16 top-2 inline-block bg-cyan-600 rounded-lg px-3 py-1.5 text-xs font-semibold  mr-2 mb-2 text-white">
              {" "}
              For Sale
            </span>
            <span onClick={heartClick}  className=" cursor-pointer absolute right-2 top-2 inline-block bg-white rounded-lg pt-2 px-2 text-sm font-semibold ">
              {" "}
              {like?<Image src={heartr} alt='heart' />:<Image src={heart} alt='heart' />}
            </span>
            <div className="px-6 py-4">
              <div className={`font-bold text-lg mb-2 ${darkMode?'text-[#f9f9fa]':'text-black'} `}>$ 708 910</div>
              <p className={`text-gray-700 text-sm ${darkMode?'text-[#979eaa]':'text-gray-700'}  `}>
               Bihar Patna,85486
              </p>
            </div>
            <div className="lg:px-5 lg:pt-4 lg:pb-2 lg:ml-2 ml-20">
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-2 mb-2 ">
                {" "}
                <Image src={bed} alt='bed' /> 2
              </span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                {" "}
                <Image src={bathtub} alt='img' /> 1
              </span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-1 mb-2">
                {" "}
                <Image src={tape} alt='tape' /> 60 m&sup2;
              </span>
            </div>
          </motion.div>

          
          <motion.div animate={{y:0,x:0,opacity:1}} initial={{y:-15,x:-15,opacity:0}} transition={{duration:1,delay:1}} whileHover={{
            position:'relative',
            zIndex:1,
            scale:1.1,
            transition:{
              duration:.2
            }
          }} className={`max-w-sm rounded-xl overflow-hidden shadow-lg mt-10 lg:ml-5 mx-2  relative ${darkMode?' border border-[#1e2534]':'border-none'} `}>
            <Image className=" rounded-xl " src={house2} alt="img" height={2800} />

            <span className=" absolute left-2 top-2 inline-block bg-cyan-600 rounded-lg px-3 py-1.5 text-xs font-semibold  mr-2 mb-2 text-white">
              {" "}
              For Sale
            </span>
            <span  onClick={heartClick2} className=" cursor-pointer absolute right-2 top-2 inline-block bg-white rounded-lg pt-2 px-2 text-sm font-semibold ">
              {" "}
              {like2?<Image src={heartr} alt='img' />:<Image src={heart} alt='img' />}
            </span>

            <div className="px-6 py-4">
              <div className={`font-bold text-lg mb-2 ${darkMode?'text-[#f9f9fa]':'text-black'} `}>$ 699 678</div>
              <p className={`text-gray-700 text-sm ${darkMode?'text-[#979eaa]':'text-gray-700'}  `}>
                New Delhi Cp,84y35
              </p>
            </div>

            <div className="lg:px-5 lg:pt-4 lg:pb-2 lg:ml-2 ml-20 ">
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                {" "}
                <Image src={bed} alt='bed' /> 2
              </span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                {" "}
                <Image src={bathtub} alt='img' /> 1
              </span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-1 mb-2">
                {" "}
                <Image src={tape} alt='tape' /> 60 m&sup2;
              </span>
            </div>
          </motion.div>
          <motion.div animate={{y:0,x:0,opacity:1}} initial={{y:-15,x:-15,opacity:0}} transition={{duration:1,delay:1}} whileHover={{
            position:'relative',
            zIndex:1,
            scale:1.1,
            transition:{
              duration:.2
            }
          }} className={`max-w-sm rounded-xl overflow-hidden shadow-lg mt-10 lg:ml-5 mx-2  relative ${darkMode?' border border-[#1e2534]':'border-none'} `}>
            <Image className=" rounded-xl " src={house3} alt="img" height={3100} />
            <span className=" absolute left-2 top-2 inline-block bg-cyan-600 rounded-lg px-3 py-1.5 text-xs font-semibold  mr-2 mb-2 text-white">
              {" "}
              For Sale
            </span>
            <span onClick={heartClick3} className=" cursor-pointer absolute right-2 top-2 inline-block bg-white rounded-lg pt-2 px-2 text-sm font-semibold ">
              {" "}
              {like3?<Image src={heartr} alt='img' />:<Image src={heart} alt='img' />}
            </span>
            <div className="px-6 py-4">
              <div className={`font-bold text-lg mb-2 ${darkMode?'text-[#f9f9fa]':'text-black'} `}>$ 622 000</div>
              <p className={`text-gray-700 text-sm ${darkMode?'text-[#979eaa]':'text-gray-700'}  `}>
                Mumbai, Marine- 87e987
              </p>
            </div>
            <div className="lg:px-5 lg:pt-4 lg:pb-2 lg:ml-2 ml-20 ">
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                {" "}
                <Image src={bed} alt='bed' /> 2
              </span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                {" "}
                <Image src={bathtub} alt='img' /> 1
              </span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-1 mb-2">
                {" "}
                <Image src={tape} alt='tape' /> 60 m&sup2;
              </span>
            </div>
          </motion.div>
          {posts.map((post)=>{
            return(
              <motion.div animate={{y:0,x:0,opacity:1}} initial={{y:-15,x:-15,opacity:0}} transition={{duration:1}} whileHover={{
                position:'relative',
                zIndex:1,
                scale:1.1,
                transition:{
                  duration:.2
                }
              }} className={`max-w-sm rounded-xl overflow-hidden shadow-lg mt-10 lg:ml-5 mx-2  relative ${darkMode?' border border-[#1e2534]':'border-none'} `} key={post.node.id} >
                <Image className=" rounded-xl " src={house4} alt="img" height={3000} />
                
                <span className=" absolute left-2 top-2 inline-block bg-cyan-600 rounded-lg px-3 py-1.5 text-xs font-semibold  mr-2 mb-2 text-white">
                  {" "}
                  For Sale
                </span>
                <span onClick={heartClick}  className=" cursor-pointer absolute right-2 top-2 inline-block bg-white rounded-lg pt-2 px-2 text-sm font-semibold ">
                  {" "}
                  {like?<Image src={heartr} alt='img' />:<Image src={heart} alt='img' />}
                </span>
                <div className="px-6 py-4">
                  <div className={`font-bold text-lg mb-2 ${darkMode?'text-[#f9f9fa]':'text-black'} `}>
                    $ 
                       {post.node.price}
                    
                  </div>
                  <p className={`text-gray-700 text-sm ${darkMode?'text-[#979eaa]':'text-gray-700'}  `}>
                  
                      {post.node.address}
                    
                  </p>
                </div>
                <div className="lg:px-5 lg:pt-4 lg:pb-2 lg:ml-2 ml-20">
                  <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-2 mb-2 ">
                    {" "}
                    <Image src={bed} alt='bed' /> 2
                  </span>
                  <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                    {" "}
                    <Image src={bathtub} alt='img' /> 1
                  </span>
                  <span className="inline-block bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold  mr-1 mb-2">
                    {" "}
                    <Image src={tape} alt='tape' /> 60 m&sup2;
                  </span>
                </div>
              </motion.div>
              
            )
          })}
          
          
        </div>

        <div className="ml-10 mt-10 lg:h-[640px] sm:h-[50px]  rounded-xl shadow-lg relative">
          <motion.div animate={{scale:1,opacity:1}} initial={{scale:0.9,opacity:0}} transition={{duration:1}} className="relative text-right rounded-2xl">
            <div className=" overflow-hidden bg-none rounded-2xl ">
              <iframe className='lg:w-[640px] lg:h-[640px] w-[320px] h-[320px] '
                // width="640"  
                // height="640"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=2972%20Westheimer%20Rd.%20Santa%20Ana,%20Illinois%2085486&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <Link href="https://123movies-to.org"> </Link>
              <br />
              <Link href="https://www.embedgooglemap.net"> </Link>
            </div>
          </motion.div>
          <motion.div animate={{y:0,opacity:1}} initial={{y:-10,opacity:0}} transition={{duration:1,delay:2}} className="max-w-sm  lg:max-w-full sm:hidden  lg:flex sm:flex left-36 top-28 absolute  rounded-2xl ">
  
  <div className={`pl-4 flex flex-col justify-between leading-normal rounded-2xl shadow-xl ${darkMode?'bg-[#111827]':'bg-white'}`}>
    
    <motion.div animate={{opacity:1,x:0}} initial={{opacity:0,x:-10}} transition={{duration:1,delay:2.5}} className="lg:flex items-center hidden ">
      <Image className="w-10 h-10 rounded-xl mr-4  hidden lg:block  " src={house} alt="img" width={130} height={130} />
      <div  className="text-md p-5 ">
        <p className={`leading-none font-bold  ${darkMode?'text-white':'text-black'} `}>$ 708 910</p>
        <p className={` mr-3 text-sm pt-1 ${darkMode?'text-[#979eaa]':'text-gray-600'} ` }>Bihar Patna Road, 
        <br />
        Illinois 85486</p>
        <span className="inline-block bg-gray-200 rounded-lg px-3 pt-1 text-sm font-semibold  m-5">
                {" "}
                <Image src={bed} alt='bed' /> 2
              </span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 pt-1 text-sm font-semibold  mr-5 mb-2">
                {" "}
                <Image src={bathtub} alt='img' /> 1
              </span>
              <span className="inline-block bg-gray-200 rounded-lg px-3 pt-1 text-sm font-semibold  mr-2 mb-2">
                {" "}
                <Image src={tape} alt='tape' /> 60 m&sup2;
              </span>
      </div>
      
    </motion.div>
  </div>
</motion.div>
        </div>
      </div>
      <motion.div animate={{y:0,opacity:1}} initial={{y:15,opacity:0}} transition={{duration:1}} className={` pt-4 pb-2 pl-56  ${darkMode?'bg-[#111827]':'bg-white'}`}>
        <span className="lg:inline-block hidden bg-gray-200 rounded-lg px-3 py-1 text-sm font-semibold mr-2 mb-2">
          . . . 15 More
        </span>
      </motion.div>
    </div>
  );
}

export async function getStaticProps(){

  const posts = (await getPosts()) || [];

  return{
    props:{
      posts
    }
  }

}
