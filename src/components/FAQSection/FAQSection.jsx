import { useState } from 'react';
import styles from './FAQSection.module.css';


const questions = [
    {
      question: 'Если я уже разбирала свою матрицу, нужно ли покупать?',
      answer:
        'Если вы разбирали Матрицу самостоятельно или даже с нумерологом, и это не дало результатов - это значит, что вам не хватило знаний и понимания всех нюансов. Следует попробовать другой подход.',
    },
    {
        question: 'Можно ли разобрать свою Матрицу самостоятельно?',
        answer:
          'Если вы не нумеролог, то невозможно. Наши ученицы ежедневно учатся и практикуются 4 месяца, прежде чем начать брать первых клиентов.',
      },
      {
        question: 'Как проходит разбор?',
        answer:
          'После оплаты нужно будет написать нумерологу вашу дату рождения и мы подберем удобную дату консультации для вас.',
      },
      {
        question: 'Какие сферы можно проработать через матрицу?',
        answer:
          'Все сферы. Матрица Судьбы – это персональная инструкция. Ключик, открывающий вам дверь к пониманию себя.',
      },
      {
        question: 'Насколько подробен этот разбор?',
        answer:
          'Нумеролог производит разбор индивидуально под каждого клиента. Это не шаблонная информация из Интернета. Дарья училась у основательницы метода и дает неискаженную и рабочую информацию клиентам.',
      },
      {
        question: 'Можно ли получить запрос?',
        answer:
          'Да, конечно, после консультации нумеролог пришлет вам полную запись.',
      },
      {
        question: 'Могу ли я задать вопрос?',
        answer:
          'Да, напишите нам в телеграмме.',
      }
   
  ];

function FAQSection() {

    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Часто задаваемые вопросы</h2>

        {questions.map((q, index) => (
          <div key={index} className={styles.item}>
            <button
              className={`${styles.question} ${openIndex === index ? styles.active : ''}`}
              onClick={() => toggle(index)}
            >
              {q.question}
            </button>
            <div className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}>
              {q.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
