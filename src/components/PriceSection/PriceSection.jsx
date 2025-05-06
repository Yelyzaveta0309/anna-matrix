
import styles from './PriceSection.module.css';
import { useEffect, useState } from 'react';

function PriceSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 1);

    const updateTimer = () => {
      const now = new Date();
      const diff = deadline - now;

      if (diff <= 0) {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section">
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Стоимость консультации</h2>
  
      <div className={styles.priceWrapper}>
        <p className={styles.name}>Полная консультация</p>
        <p className={styles.new}>1500 лир <span className={styles.old}>2500 лир</span></p>
        <p className={styles.new}>1500 грн <span className={styles.old}>2500 грн</span></p>
      </div>
  
      <div className={styles.priceWrapper}>
        <p className={styles.name}>Разбор одной сферы жизни</p>
        <p className={styles.new}>800 лир <span className={styles.old}>1200 лир</span></p>
        <p className={styles.new}>800 грн <span className={styles.old}>1200 грн</span></p>
      </div>

      <div className={styles.priceWrapper}>
        <p className={styles.name}>Прогноз на год по всем сферам жизни</p>
        <p className={styles.new}>900 лир <span className={styles.old}>1500 лир</span></p>
        <p className={styles.new}>900 грн <span className={styles.old}>1500 грн</span></p>
      </div>
  
      <div className={styles.timerWrapper}>
        <p className={styles.text}>Осталось до конца акции:</p>
        <div className={styles.timer}>
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>:
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>:
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        </div>
      </div>
        <button className={styles.button}  onClick={() => window.open('https://wa.me/905397207652', '_blank')}>Заказать консультацию</button>
      

    <p className={styles.bonus}>
      <strong>Бонус:</strong> после консультации Вы получите персональные практики по проработке энергий!
    </p>

    </div>
  </section>
  );
}

export default PriceSection;
