function HowItWorks() {
    const steps = [
      {
        number: '01',
        title: 'Приглашение',
        text: 'Кто-то предлагает конкретный повод познакомиться со своей культурой.',
      },
      {
        number: '02',
        title: 'Отклик',
        text: 'Другой человек выбирает приглашение, которое ему интересно.',
      },
      {
        number: '03',
        title: 'Встреча',
        text: 'Вы договариваетесь и встречаетесь в реальной жизни.',
      },
      {
        number: '04',
        title: 'Впечатление',
        text: 'После встречи можно поделиться впечатлениями и оставить отзыв.',
      },
    ]
  
    return (
      <section id="about" className="how-section">
        <div className="how-inner">
          <div className="how-heading">
            <p className="section-kicker">КАК ЭТО РАБОТАЕТ</p>
  
            <h2>
              От цифрового
              <br />
              приглашения —
              <br />
              к реальной встрече.
            </h2>
          </div>
  
          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.number}>
                <span className="step-number">{step.number}</span>
  
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default HowItWorks