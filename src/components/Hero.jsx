function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">ПЛАТФОРМА КУЛЬТУРНОГО ОБМЕНА</p>
  
          <h1>
            <span className="hero-line">Познакомиться</span>
            <span className="hero-line hero-line-accent">со своими</span>
          </h1>
  
          <p className="hero-description">
            СВОИ помогает студентам знакомиться с культурой друг друга
            через реальные встречи, приглашения и совместные события.
          </p>
  
          <div className="hero-actions">
            <a href="#invitations" className="hero-primary">
              Смотреть приглашения
            </a>
  
            <a href="#about" className="hero-secondary">
              Как это работает
              <span>↓</span>
            </a>
          </div>
        </div>
  
        <div className="hero-note">
          <span>Москва</span>
          <span>2026</span>
        </div>
      </section>
    )
  }
  
  export default Hero