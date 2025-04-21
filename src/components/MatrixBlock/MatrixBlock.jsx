import styles from './MatrixBlock.module.css';
import matrixExampleImg from '../../assets/mt.jpg';

function MatrixBlock() {
  return (

  <section className={styles.section}>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Матрица Судьбы</h2>
      <p className={styles.subtitle}>персональный ключ к твоей жизни</p>
  
  
    <div className={styles.imageWrapper}>
      <img src={matrixExampleImg} alt="Схема матрицы" className={styles.image} />
    </div>
  
    <div className={styles.container}>
      <p className={styles.text}>- это инструмент, благодаря которому по дате рождения можно узнать все о себе и раскрыть свой потенциал</p>
      <p className={styles.text}>Наш мир сформирован из 22-х основных энергий мироздания. У каждого человека уникальный набор энергий, формирующих его судьбу.</p>
      <p className={styles.text}>Мы можем проживать свои энергии «по минусу» или «по плюсу» – от этого будут зависеть наши результаты в жизни.</p>
      <p className={styles.text}>Матрица Судьбы – это инструмент для работы со своими энергиями и ключ к тому, чтобы проживать свою лучшую жизнь</p>
    </div>

    </div>
  </section>


  );
}

export default MatrixBlock;
