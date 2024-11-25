"use client"
import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import styles from "../navbar/navbar.module.css"
import Link from 'next/link'
import { motion,AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [open,setOpen]=useState<boolean>(false);

  const showfunc=()=>{
    setOpen(!open)
  }
  return (
   <>
   <nav className={styles.nav}>
   <h1> Style World.</h1>
   <AnimatePresence>
        {open==true?(
          <motion.div className={`${styles.linksdiv} ${styles.adjust}`}
            key={"menu"}
            initial={{height:"0px",opacity:0}}
            animate={{height:"350px",opacity:1}}
            exit={{height:"0px",opacity:0}}
            transition={{duration:3}}>
         <ul>
            <li><Link href="#!" style={{color:"#dfbd99",fontWeight:"600"}}>HOME</Link></li>
            <li><Link href="#!">SHOP</Link></li>
            <li><Link href="#!">CONTACT</Link></li>
         </ul>

         <button>LOGIN</button>
         </motion.div>
        )
         :(
         <div className={`${styles.linksdiv}`}>
          <ul>
          <li><Link href="/" style={{color:"#dfbd99",fontWeight:"600"}}>HOME</Link></li>
          <li><Link href="/shop">SHOP</Link></li>
          <li><Link href="/contact">CONTACT</Link></li>
          </ul>
          <button>LOGIN</button>
         </div>
         )}
         </AnimatePresence>
         <TiThMenu size={35} color='#c9b037' className={styles.menu} onClick={showfunc}/>
   </nav>
   </>

        )}


export default Navbar


