import { news } from '../data/news'

function NewsSection({ onOpen }) {
  return (
    <section id="news" className="news-section">
      <div className="news-heading">
        <div>
          <p className="section-kicker">НОВОСТИ</p>

          <h2>
            Что происходит
            <br />
            с «СВОИ»
          </h2>
        </div>

        <button
          type="button"
          className="news-all-button"
          onClick={onOpen}
        >
          Все новости →
        </button>
      </div>

      <div className="news-list">
        {news.map((item) => (
          <article className="news-item" key={item.id}>
            <span className="news-date">{item.date}</span>

            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>

            <span className="news-arrow">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NewsSection