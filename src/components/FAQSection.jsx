import { useState } from 'react'

const questions = [
  {
    question: 'Что такое «СВОИ»?',
    answer:
      '«СВОИ» — платформа культурного обмена, которая помогает студентам знакомиться с культурами друг друга через реальные встречи.',
  },
  {
    question: 'Это приложение для знакомств?',
    answer:
      'Нет. Цель проекта — не романтические знакомства, а культурный обмен и человеческое взаимодействие.',
  },
  {
    question: 'Кто может создать приглашение?',
    answer:
      'Участник может предложить другим конкретный повод познакомиться с частью своей культуры, традиции или повседневной жизни.',
  },
  {
    question: 'Обязательно ли встречаться лично?',
    answer:
      'Именно реальное взаимодействие является основной частью механики проекта. Конкретный формат встречи участники согласуют между собой.',
  },
  {
    question: 'Что делать, если я передумал?',
    answer:
      'Вы можете отказаться от встречи в любой момент. Важно, чтобы взаимодействие оставалось добровольным для обеих сторон.',
  },
  {
    question: 'Можно ли прийти не одному?',
    answer:
      'Формат встречи зависит от приглашения. Если автор приглашения допускает компанию, это можно заранее обсудить с ним.',
  },
  {
    question:
      'Что делать, если возникла проблема или есть вопрос?',
    answer: (
      <>
        Если у вас что-то случилось во время взаимодействия
        или остались вопросы по проекту, напишите в поддержку:{' '}
        <a
          href="mailto:sosnina.ek@yandex.ru"
          className="faq-support-link"
        >
          sosnina.ek@yandex.ru
        </a>
      </>
    ),
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="faq-section">
      <div className="faq-heading">
        <p className="section-kicker">FAQ</p>

        <h2>Частые вопросы</h2>
      </div>

      <div className="faq-list">
        {questions.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div
              className={`faq-item ${
                isOpen ? 'open' : ''
              }`}
              key={item.question}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() =>
                  setOpenIndex(
                    isOpen ? null : index
                  )
                }
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>

                <span
                  className="faq-plus"
                  aria-hidden="true"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQSection