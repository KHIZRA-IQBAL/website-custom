import styles from  "@/components/product-detail/productdetail.module.css"
import React from 'react'
import Image from "next/image"
import { aBezee } from "@/font"
import { cardData } from "@/constant/card"

const ProductDetail = (props:{cardid:number}) => {
 const data=   cardData.find((item)=>{
        return(item.Id==props.cardid)
    })
  return (
    <div>
      <section className={styles.ProductDetail}>
     <div className={styles.leftimg} style={{background:data?.backgroundColor}}>
        <Image src={data?.src|| "/pic-one__1_-removebg-preview.png"} alt={"men"}  width={400} height={600} className={styles.img}></Image>
     </div>
     <div className={styles.rightdiv}>
        <h1 className={aBezee.className}>{data?.heading}</h1>
        <p>{data?.price}</p>
       <div className={styles.carddiv}> <input type="number" />
       <button>ADD TO CART</button></div>
       <p style={{fontSize:"30px"}}>Product Details</p>
       <p style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam similique beatae architecto iste voluptates recusandae cum porro reiciendis nemo, assumenda magni quas numquam animi at non ad commodi aut quaerat odio culpa! Exercitationem enim atque, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi consequatur, laudantium atque enim voluptates sequi, inventore sit rerum iste nihil totam quidem eius sint voluptas. Perspiciatis reiciendis dolorem mollitia aperiam. Facere accusamus molestiae voluptates reiciendis quo, pariatur quod maiores nostrum id magni, accusantium, eaque corrupti alias ab numquam sint reprehenderit. </p>
     </div>
      </section>
    </div>
  )
}

export default ProductDetail
