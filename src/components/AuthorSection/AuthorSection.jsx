import styles from './AuthorSection.module.css';
import authorImg from '../../assets/author.jpg';

function AuthorSection() {
  return (
    <section className="section">
      <div className={styles.wrapper}>
        <img src={authorImg} alt="Автор" className={styles.image} />
        <div className={styles.textBlock}>
          <h3 className={styles.title}>Про автора</h3>
          <div className={styles.bio}>
            <p>
              <span className={styles.highlight}>Анна Старостенко</span> — успешный нумеролог и эксперт по Матрице Судьбы. Успешно практикует этот метод для диагностики и гармонизации всех сфер жизни. Специализируется на работе с энергиями, денежными потоками и кармическими задачами, помогая клиентам находить свое истинное предназначение и достигать финансового благополучия. Автор программ личностного роста, направленных на осознание и раскрытие потенциала через знания о своей Матрице.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AuthorSection;
