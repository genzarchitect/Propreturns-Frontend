import React,{useState} from "react";
import {motion} from 'framer-motion'




const Filters = ({darkMode}) => {

  const [showSale,setShowSale]=useState(false);
 const handleClick1 = ()=>{
  setShowSale(!showSale);
 }
 const [showSaleN,setShowSaleN]=useState(false);
 const handleClickN = ()=>{
  setShowSaleN(!showSaleN);
 }

 const [showType,setShowType]=useState(false);
 const handleClick2 = ()=>{
  setShowType(!showType);
 }

 const [showMinPrice,setShowMinPrice]=useState(false);
 const handleClick3 = ()=>{
  setShowMinPrice(!showMinPrice);
 }

 const [showMaxPrice,setShowMaxPrice]=useState(false);
 const handleClick4 = ()=>{
  setShowMaxPrice(!showMaxPrice);
 }

 const [showFloorArea,setShowFloorArea]=useState(false);
 const handleClick5 = ()=>{
  setShowFloorArea(!showFloorArea);
 }

 const[sale,setSale]=useState('For Sale');
 
 const handleSale = (e)=>{
  e.preventDefault();
  
  setSale(e.target.innerText);
  setShowSale(false);
 }
 const[saleN,setSaleN]=useState('For Sale');
 
 const handleSaleN = (e)=>{
  e.preventDefault();
  
  setSaleN(e.target.innerText);
  setShowSaleN(false);
 }

 const[type,setType]=useState('House');
 const handleType = (e)=>{
  e.preventDefault();
  
  setType(e.target.innerText);
  setShowType(false);
 }
 const[minPrice,setMinPrice]=useState('$500k');
 const handleMinPrice = (e)=>{
  e.preventDefault();
  
  setMinPrice(e.target.innerText);
  setShowMinPrice(false);
 }
 const[maxPrice,setMaxPrice]=useState('$700k');
 const handleMaxPrice = (e)=>{
  e.preventDefault();
  
  setMaxPrice(e.target.innerText);
  setShowMaxPrice(false);
 }
 const[area,setArea]=useState('60');
 const handleArea = (e)=>{
  e.preventDefault();
  
  setArea(e.target.innerText);
  setShowFloorArea(false);
 }
 


  return (
    <div>
        <div className={`lg:grid lg:grid-cols-[1.9fr_0.25fr_1fr_0.75fr_1.15fr_1fr_0.65fr] grid grid-cols-[1fr,1fr] ${darkMode?'bg-[#111827]':'bg-white'} `} >
      <motion.div animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{duration:1,delay:2.5}} className="flex rounded-md shadow-sm w-1 ">
        <input
          type="text"
          name="company-website"
          id="company-website"
          className=" bg-[#f3f3f3]  mt-16 lg:ml-5 ml-14  focus:ring-gray-500 focus:border-gray-500 flex-1  block  p-3.5 rounded-md text-sm  rounded-r-md border-gray-300 bg-[url('../public/search.png')] bg-no-repeat bg-[center_left_0.5rem] indent-5 "
          placeholder="Enter an address, city or ZIP code"
          size="35"
        />
    </motion.div>

    

        <div className="mt-16" >
          <motion.button animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{duration:1,delay:2.25}} onClick={handleClick1} className="lg:flex mx-auto bg-[#f3f3f3] border-0 py-3 px-5 rounded-md font-semibold text-center whitespace-nowrap text-sm hidden  ">
            {" "}
            {sale}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
          </motion.button>
        {showSale && (

<div className=" absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
<div className="py-1" role="none">

<a  onClick={handleSale} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer " role="menuitem" tabIndex="-1" id="menu-item-0" value="For Lease" >For Sale</a>
  
  <a  onClick={handleSale} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer " role="menuitem" tabIndex="-1" id="menu-item-0" value="For Lease" >For Lease</a>
  
  
  
</div>
</div>

        )}
         
        </div>
        

        <div className="lg:mt-16 mt-5">
          <motion.button animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{duration:1,delay:2}} onClick={handleClick2} className="flex mx-auto bg-[#f3f3f3] border-0 py-3 px-5 rounded-md font-semibold text-center whitespace-nowrap text-sm ">
            {" "}
            Type: {type}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
          </motion.button>
          {showType && (

<div className=" absolute mt-2 lg:w-56 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30 lg:m-0 ml-20 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
<div className="py-1" role="none">

<a onClick={handleType} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">House</a>
  
  <a onClick={handleType} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">Land</a>
  <a onClick={handleType} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1">Office</a>
  
  
  
</div>
</div>

        )}
</div>
<div className="lg:mt-16 mt-5 lg:mr-0 mr-6">
          <motion.button animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{duration:1,delay:1.5}} onClick={handleClick3} className="flex mx-auto bg-[#f3f3f3] border-0 py-3 px-5 rounded-md font-semibold text-center whitespace-nowrap text-sm ">
            {" "}
            Min Price: {minPrice}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
          </motion.button>
          {showMinPrice && (

<div className=" absolute mt-2 lg:w-56 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30 lg:m-0 mr-12 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
<div className="py-1" role="none">

<a onClick={handleMinPrice} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">$500k</a>
  
  <a onClick={handleMinPrice} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">$600k</a>
  <a onClick={handleMinPrice} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1">$700k</a>
  
  
  
</div>
</div>

        )}
</div>
<div className="lg:mt-16 mt-5" >
          <motion.button animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{duration:1,delay:0.75}} onClick={handleClick4} className="flex mx-auto bg-[#f3f3f3] border-0 py-3 px-5 rounded-md font-semibold text-center whitespace-nowrap text-sm ">
            {" "}
            Max Price: {maxPrice}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
          </motion.button>
          {showMaxPrice && (

<div className=" absolute mt-2 lg:w-56 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30 lg:m-0  ml-24 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
<div className="py-1" role="none">
  
<a onClick={handleMaxPrice} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">$700k</a>
  <a onClick={handleMaxPrice} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">$800k</a>
  <a onClick={handleMaxPrice} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1">$900k</a>
  
  
  
</div>
</div>

        )}
</div>
<div className="lg:mt-16 mt-5" >
          <motion.button animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{duration:1,delay:0.5}} onClick={handleClick5} className="flex mx-auto bg-[#f3f3f3] border-0 py-3 px-5 rounded-md font-semibold text-center whitespace-nowrap text-sm ">
            {" "}
            Floor area: {area} m&sup2;
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
          </motion.button>
          {showFloorArea && (

<div onClick={handleArea} className=" absolute mt-2 lg:w-56 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30 lg:m-0  mr-5 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
<div className="py-1" role="none">
  
  <a onClick={handleArea} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">50</a>
  <a onClick={handleArea} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">60</a>
  <a onClick={handleArea} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1">70</a>
  
  
  
</div>
</div>

        )}
</div>
<div className="mt-5 ml-4 lg:hidden" >
          <motion.button animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{duration:1,delay:2.25}} onClick={handleClickN} className="flex mx-auto bg-[#f3f3f3] border-0 py-3 px-5 rounded-md font-semibold text-center whitespace-nowrap text-sm lg:hidden  ">
            {" "}
            {saleN}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
          </motion.button>
        {showSaleN && (

<div className=" absolute mt-2 lg:w-56 w-24 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30 lg:m-0 ml-16 " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
<div className="py-1" role="none">

<a  onClick={handleSaleN} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer " role="menuitem" tabIndex="-1" id="menu-item-0" value="For Lease" >For Sale</a>
  
  <a  onClick={handleSaleN} className="text-gray-700 block px-4 py-2 text-sm rounded hover:bg-gray-200 cursor-pointer " role="menuitem" tabIndex="-1" id="menu-item-0" value="For Lease" >For Lease</a>
  
  
  
</div>
</div>

        )}
         
        </div>
<div className="lg:mt-16 mt-5">
          <motion.button animate={{y:0,opacity:1}} initial={{y:-20,opacity:0}} transition={{duration:1,delay:0.25}} className="flex mx-auto bg-[#f3f3f3] border-0 py-3 pr-5 pl-7 rounded-md font-semibold text-center whitespace-nowrap text-sm ">
            {" "}
            
            More
            <span className="inline-block w-1.5 h-1.5 mr-2 bg-red-600 rounded-full "></span>
          </motion.button>
          
</div>

        </div>
      </div>
    
  );
};

export default Filters;
