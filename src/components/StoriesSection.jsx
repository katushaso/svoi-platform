import { stories } from '../data/stories'

function StoriesSection({ onOpen }) {
  return (
    <section id="stories" className="stories-section">
      <div className="stories-heading">
        <div>
          <p className="section-kicker">ИСТОРИИ</p>

          <h2>
            За каждым
            <br />
            взаимодействием
            <br />
            есть человек.
          </h2>
        </div>

        <p>
          Самое важное в проекте нельзя
          посчитать одной цифрой.
        </p>
      </div>

      <div className="stories-list">
        {stories.map((story, index) => (
          <article className="story-card" key={story.id}>
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

      <div className="section-more">
        <button type="button" onClick={onOpen}>
          Смотреть все истории
          <span>→</span>
        </button>
      </div>
    </section>
  )
}

export default StoriesSection