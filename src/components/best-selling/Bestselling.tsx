"use client"
import { abhayaLibre } from "@/font";
import styles from "@/components/best-selling/bestselling.module.css";
import italiana from "@/font";
import useEmblaCarousel from 'embla-carousel-react'
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { aBezee } from "@/font";
import { cardData } from "@/constant/card";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";


const Bestselling = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay({delay:2000,stopOnInteraction:false,stopOnMouseEnter:true})])

    useEffect(() => {
        if (emblaApi) {
          console.log(emblaApi.slideNodes()) // Access API
        }
      }, [emblaApi])
    return (
        <div>
            <section className={styles.bestselling}>
                <h1 className={italiana.className}>Best Selling</h1>

                <p className={abhayaLibre.className}>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem, ipsum dolor.</p>

                <div className={`${styles.cardsection} ${styles.embla}`} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {cardData.map((data) => {
                            return (
                                <div className={styles.embla__slide} key={data.Id}>
                                    <div className={styles.imgdiv}  style={{background:data.backgroundColor}}>
                                        <Image src={data.src} alt="jewellary" width={371} height={606} className={styles.cardimg}></Image>
                                    </div>


                                    <div className={styles.cardtext}>
                                        <h1 className={aBezee.className}>{data.heading}</h1>
                                        <div className={styles.pricediv}>   <p>{data.price}    |   {data.rating}.0<FaStar size={20} color="yellow" className={styles.star} /></p></div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <Link href={"/shop"}><button>See more</button></Link>
            </section>
        </div>
    )
}

export default Bestselling
