import { news } from '../data/news'

function NewsPage({ onBack }) {
  return (
    <main className="inner-page">
      <div className="inner-page-top">
        <button type="button" onClick={onBack}>
          ← На главную
        </button>
      </div>

      <div className="inner-page-heading">
        <p className="section-kicker">НОВОСТИ</p>

        <h1>
          Что происходит
          <br />
          с «СВОИ»
        </h1>
      </div>

      <div className="full-news-list">
        {news.map((item) => (
          <article className="full-news-item" key={item.id}>
            <span>{item.date}</span>

            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default NewsPage