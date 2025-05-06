import styles from './ConsultationBlock.module.css';
import matrixImg from '../../assets/matrix.jpg';


function ConsultationBlock() {
  return (
    <section className="section">
      <div className={styles.wrapper}>
      <img src={matrixImg} alt="Матрица Судьбы" className={styles.image} />
      <h1 className={styles.title}>
        Персональная консультация по Матрице Судьбы от Нумеролога <br />
        <span className={styles.highlight}>со скидкой -70%</span>
      </h1>
      <p className={styles.text}>
        Получите руководство к своей жизни. Узнайте как раскрыть потенциал, проработать кармические задачи, и достигать гармонии в жизни, любви и карьере.
      </p>
      <button className={styles.button}  onClick={() => window.open('https://wa.me/905397207652', '_blank')}>Заказать консультацию</button>
      </div>
     
    </section>
  );
}

export default ConsultationBlock;
