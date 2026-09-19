import { useState } from 'react'
import { invites } from '../data/invites'
import InvitationCard from './InvitationCard'

const categories = [
  'Все',
  'Еда',
  'Традиции',
  'Праздники',
  'Религия',
  'Семья',
]

function InvitationsSection({ onOpenInvite }) {
  const [activeCategory, setActiveCategory] = useState('Все')

  const filteredInvites =
    activeCategory === 'Все'
      ? invites
      : invites.filter((invite) =>
          invite.meta.includes(activeCategory)
        )

  return (
    <section id="invitations" className="section invitations-section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">ПРИГЛАШЕНИЯ</p>
          <h2>
            Есть повод
            <br />
            познакомиться
          </h2>
        </div>

        <p className="section-intro">
          Здесь начинаются реальные встречи.
          Выберите приглашение, которое вам интересно,
          и сделайте первый шаг.
        </p>
      </div>

      <div className="invite-filters">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={`filter ${
              activeCategory === category ? 'active' : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="invitations-grid">
        {filteredInvites.slice(0, 3).map((invite, index) => (
          <InvitationCard
            key={invite.id}
            invite={invite}
            featured={index === 0}
            onOpen={onOpenInvite}
          />
        ))}
      </div>

      {filteredInvites.length === 0 && (
        <div className="empty-state">
          <p>Пока нет приглашений в этой категории.</p>
        </div>
      )}

      <div className="section-more">
        <button
          type="button"
          onClick={() => onOpenInvite?.('all')}
        >
          Смотреть все приглашения
          <span>→</span>
        </button>
      </div>
    </section>
  )
}

export default InvitationsSection