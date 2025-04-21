import { useState , useEffect  } from "react";
import styles from './ReviewsSection.module.css';

const reviews = [
  {
    name: 'Ольга, 34 года',
    text: 'Консультация полностью изменила мой взгляд на жизнь. Я поняла, куда двигаться дальше и что мешает моему развитию.',
  },
  {
    name: 'Ирина, 29 лет',
    text: 'Очень точно и глубоко. Проработала много страхов и стала увереннее в себе. Спасибо большое!',
  },
  {
    name: 'Татьяна, 41 год',
    text: 'Теперь я понимаю, почему многое не получалось раньше. Консультация помогла мне найти свои сильные стороны.',
  },
];

function ReviewsSection(){

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

 
  return (
    <section className={styles.section}>
      <div className= {styles.container}>
        <h2 className={styles.title}>Отзывы клиентов</h2>


        <div className={styles.wrapper}>
          <div className={styles.slider}>
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  index === activeIndex ? styles.active : ""
                }`}
              >
                <p className={styles.name}>{review.name}</p>
                <p className={styles.text}>{review.text}</p>
              </div>
            ))}
          </div>
        </div>




        <div className={styles.questionWrapper}>
          <p className={styles.questionText}>
              Если у вас остались вопросы по консультации или оплате, по кнопке ниже вы можете написать нам и нумеролог вас подробно проконсультирует.
          </p>
          <a href="#form" className={styles.questionButton}>Задать нумерологу</a>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
