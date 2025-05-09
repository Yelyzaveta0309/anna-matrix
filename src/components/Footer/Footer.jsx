import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.section}>
    <div className={styles.wrapper}>
      <p className={styles.links}>
        Все права защищены © 
        <span id="year"></span>. Любое копирование материалов допускается только с согласия правообладателя.
      </p>
  
    </div>
    <div className={styles.social}>
        <a href="https://wa.me/905397207652" target="_blank" aria-label="WhatsApp" className={styles.link}>
          <svg viewBox="0 0 22 22" fill="currentColor" className={styles.icon}>
            <path d="M12.002 2C6.476 2 2 6.475 2 12c0 1.989.583 3.834 1.582 5.392L2 22l4.715-1.559A9.938 9.938 0 0 0 12.002 22C17.526 22 22 17.525 22 12S17.526 2 12.002 2zm0 18c-1.726 0-3.337-.51-4.68-1.385l-.334-.211-2.8.925.926-2.73-.217-.353A7.948 7.948 0 0 1 4.002 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.621-5.57c-.254-.127-1.506-.742-1.74-.826-.234-.085-.404-.127-.573.127s-.658.825-.807.996c-.148.17-.296.191-.55.064-.253-.127-1.065-.392-2.03-1.25-.75-.668-1.256-1.49-1.404-1.743-.148-.255-.016-.392.111-.519.113-.112.254-.296.38-.445.127-.148.17-.255.254-.425.085-.17.043-.319-.021-.446-.063-.127-.573-1.38-.788-1.894-.207-.514-.418-.444-.573-.454l-.487-.01c-.17 0-.445.063-.676.319s-.887.86-.887 2.101c0 1.24.908 2.487 1.034 2.659.127.17 1.79 2.729 4.338 3.829.606.255 1.079.408 1.45.521.61.19 1.164.17 1.602.103.489-.073 1.526-.624 1.742-1.228.215-.604.215-1.12.15-1.228-.063-.108-.233-.17-.486-.297z"/>
          </svg>
        </a>

      
        <a href="https://www.instagram.com/annastar16?igsh=MjRmMjZ2dHVlNDJx&utm_source=qr" target="_blank" aria-label="Instagram" className={styles.link}>
          <svg viewBox="0 0 24 24" fill="currentColor" className={styles.icon}>
            <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.8.24 2.22.4.56.21.96.46 1.38.88.42.42.67.82.88 1.38.16.42.345 1.05.4 2.22.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.8-.4 2.22-.21.56-.46.96-.88 1.38-.42.42-.82.67-1.38.88-.42.16-1.05.345-2.22.4-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.8-.24-2.22-.4a3.582 3.582 0 01-1.38-.88 3.582 3.582 0 01-.88-1.38c-.16-.42-.345-1.05-.4-2.22C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.8.4-2.22.21-.56.46-.96.88-1.38.42-.42.82-.67 1.38-.88.42-.16 1.05-.345 2.22-.4C8.416 2.212 8.8 2.2 12 2.2m0-2.2C8.735 0 8.332.013 7.052.07 5.75.127 4.808.308 4.033.6 3.18.91 2.437 1.437 1.7 2.173.963 2.91.437 3.654.127 4.507c-.292.775-.473 1.717-.53 3.02C-.013 8.332 0 8.735 0 12s.013 3.668.07 4.948c.057 1.303.238 2.245.53 3.02.31.853.836 1.596 1.573 2.333.737.737 1.48 1.263 2.333 1.573.775.292 1.717.473 3.02.53C8.332 23.987 8.735 24 12 24s3.668-.013 4.948-.07c1.303-.057 2.245-.238 3.02-.53.853-.31 1.596-.836 2.333-1.573.737-.737 1.263-1.48 1.573-2.333.292-.775.473-1.717.53-3.02C23.987 15.668 24 15.265 24 12s-.013-3.668-.07-4.948c-.057-1.303-.238-2.245-.53-3.02-.31-.853-.836-1.596-1.573-2.333-.737-.737-1.48-1.263-2.333-1.573-.775-.292-1.717-.473-3.02-.53C15.668.013 15.265 0 12 0z"/>
            <circle cx="12" cy="12" r="3.2"/>
          </svg>
        </a>
      </div>
      
  </footer>
  );
}

export default Footer;
