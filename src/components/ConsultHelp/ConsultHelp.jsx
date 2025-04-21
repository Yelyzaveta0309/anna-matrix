import styles from './ConsultHelp.module.css';
import iconImg1 from '../../assets/icon.jpg';
import iconImg2 from '../../assets/icon2.jpg';
import iconImg3 from '../../assets/icon3.jpg';
import iconImg4 from '../../assets/icon4.jpg';
import iconImg5 from '../../assets/icon5.jpg';
import iconImg6 from '../../assets/icon6.jpg';

const helpItems = [
  {
    icon: iconImg1,
    text: "Вы не можете найти свое призвание, работа не доставляет удовольствия, а доход остается на одном уровне",
  },
  {
    icon: iconImg2,
    text: "Испытываете сложности в личной жизни: конфликты, развод или не можете найти партнера",
  },
  {
    icon: iconImg3,
    text: "Имеете проблемы со здоровьем: хронические болезни, отсутствие энергии, апатия, склонность к депрессиям",
  },
  {
    icon: iconImg4,
    text: "Постоянно проживаете одни и те же проблемы, которые годами не удается решить",
  },
  {
    icon: iconImg5,
    text: "У вас напряженные отношения с родителями, детьми или родом",
  },
  {
    icon: iconImg6,
    text: "Вы не знаете, какой путь выбрать и как принять правильные решения для лучшего будущего",
  },
];


function ConsultHelp() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Кому поможет консультация?</h2>
        <ul className={styles.list}>
          {helpItems.map((item, index) => (
            <li key={index} className={styles.item}>
              <img src={item.icon} alt="" className={styles.icon} />
              <span>- {item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ConsultHelp;
