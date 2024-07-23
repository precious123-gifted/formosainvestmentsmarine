// AnimatedText.jsx

import styles from './styles.module.scss'; // Import your Sass module

const AnimatedText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <div className={styles.content}>
        <div className={styles.child}>
          <p className='text-[3vw] portrait:text-[9vw] rotate-12'>We have You Covered on the Sea</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
