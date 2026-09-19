import { stories } from '../data/stories'

function StoriesPage({ onBack }) {
  return (
    <main className="inner-page">
      <div className="inner-page-top">
        <button type="button" onClick={onBack}>
          ← На главную
        </button>
      </div>

      <div className="inner-page-heading">
        <p className="section-kicker">ИСТОРИИ</p>

        <h1>
          За каждым
          <br />
          взаимодействием
          <br />
          есть человек.
        </h1>

        <p>
          Истории участников проекта и впечатления
          от реальных встреч.
        </p>
      </div>

      <div className="full-stories-list">
        {stories.map((story, index) => (
          <article className="full-story" key={story.id}>
            <span className="story-number">
              0{index + 1}
            </span>

            <blockquote>
              «{story.quote}»
            </blockquote>

            <div className="story-meta">
              <span>{story.author}</span>
              <span>{story.label}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default StoriesPage