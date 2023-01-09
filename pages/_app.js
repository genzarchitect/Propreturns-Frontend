import Filters from "../components/Filters";
import Navbar from "../components/Navbar";
import "../styles/index.css";
import {useState} from 'react'

function MyApp({ Component, pageProps }) {

  const [darkMode,setDarkMode]=useState(false);


  return<>
  <Navbar darkMode={darkMode} setDarkMode={setDarkMode}  />
  <Filters darkMode={darkMode}  />
  <Component darkMode={darkMode} {...pageProps} />
  </> 
}

export default MyApp
