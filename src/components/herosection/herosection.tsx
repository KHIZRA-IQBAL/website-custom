import Image from "next/image"
import styles from "@/components/herosection/herosection.module.css"
import React from 'react'
import italiana from "../../font"

const Herosection = () => {
  return (
    <div>
    <section className={styles.hero}>
      <div className={styles.heroleft}>
        <h1 className={italiana.className}>Where Style <br />
        Meets Innovation</h1>
        <p>Discover elegance in every click—a stylish website crafted<br />
              to blend beauty with functionality. Step into a world where<br />
              design meets sophistication and experience seamless,<br />
              captivating interactions.</p>
              <button>EXPLORE NOW</button>
      </div>
      <div className={styles.heroright}>
        <div className={styles.herorightimagebackground}>
           <Image src={"/images/file-removebg-preview.png"} alt='main picture' width={350} height={350}></Image>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Herosection;

