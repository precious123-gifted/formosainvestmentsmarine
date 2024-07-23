import React from 'react';
import styles from './seawater.module.scss'; // Import the SCSS module
import SeaWater from "../../../public/sea.png"
import Image from 'next/image';



const Marquee = () => {
  return (
    <div className={styles.section}> {/* Use section class for the container */}
      <div className={styles.textCtn}> {/* Use textCtn class for margin */}
      <div className="container portrait:w-[150vw]">

        <div className={styles.marquee}>

          
        <div className={styles.marqueetext}>
        <Image src={SeaWater} alt='sea water'/>
        </div>
        <div className={styles.marqueetext}>
        <Image src={SeaWater} alt='sea water'/>
        </div>
        <div className={styles.marqueetext}>
        <Image src={SeaWater} alt='sea water'/>
        </div>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
