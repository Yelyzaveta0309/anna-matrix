import styles from './ZonesSection.module.css';

const zones = [
  {
    title: 'Личность и таланты',
    description: 'вы узнаете свои сильные и слабые стороны, врожденные способности и потенциал развития.'
  },
  {
    title: 'Предназначение',
    description: 'понимание, в чем ваша миссия, чем лучше заниматься, чтобы чувствовать радость и гармонию.'
  },
  {
    title: 'Отношения',
    description: 'причины конфликтов, кармические связи, гармонизация отношений с партнером, детьми и родителями.'
  },
  {
    title: 'Финансы и успех',
    description: 'как раскрыть денежный поток, какие энергии блокируют изобилие и как их проработать.'
  },
  {
    title: 'Кармические уроки',
    description: 'повторяющиеся ситуации в жизни, их глубинные причины и пути выхода из них.'
  },
  {
    title: 'Ресурсы для гармонизации жизни',
    description: 'практики и рекомендации по работе с энергиями, которые помогут вам выйти на новый уровень.'
  }
];


function ZonesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
        На консультации мы разберем 7 сфер жизни
        </h2>
        <ul className={styles.list}>
          {zones.map((zone, index) => (
            <li key={index} className={styles.item}>
              <strong>- {zone.title}:</strong> {zone.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ZonesSection;
