import React from 'react'
import styles from "@/components/product-section/product.module.css"
import Image from "next/image"
import { IoStar } from "react-icons/io5";
import { cardData } from '@/constant/card';
import Link from 'next/link';


const Productsection = () => {
  return (
    <div  >
      <section className={styles.product}>
         {cardData.map((item,index)=>{return(
         <Link href={`/shop/${item.Id}`} key={index}><div className={styles.card}>
         <div className={styles.topimg} style={{ background:item.backgroundColor}}>
           <Image src={item.src} alt='picture' width={300} height={600} className={styles.cardimg}></Image>
         </div>
         <div className={styles.bottomtext}>
           <div className={styles.stardiv}>
             {[...Array(item.rating)].map((_, index) => {
               return (
                 <IoStar color='orange' width={32} key={index}/>
               )
             })}
           </div>

           <p style={{fontSize:"1.25rem"}}>{item.heading}</p>
           <p style={{ fontWeight: 600 }}>{item.price}</p>
         </div>
       </div></Link>
         )})}
      </section>
    </div>
  )
}

export default Productsection
