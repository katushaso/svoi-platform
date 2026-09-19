import { useState } from 'react'
import { invites } from '../data/invites'
import InvitationCard from '../components/InvitationCard'

const categories = [
  'Все',
  'Еда',
  'Традиции',
  'Праздники',
  'Религия',
  'Семья',
]

function InvitationsPage({ onBack, onOpenInvite }) {
  const [activeCategory, setActiveCategory] = useState('Все')

  const filteredInvites =
    activeCategory === 'Все'
      ? invites
      : invites.filter((invite) =>
          invite.meta.includes(activeCategory)
        )

  return (
    <main className="inner-page invitations-page">
      <div className="inner-page-top">
        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          <span>←</span>
          На главную
        </button>
      </div>

      <div className="invitations-page-heading">
        <div>
          <p className="section-kicker">ПРИГЛАШЕНИЯ</p>

          <h1>
            Есть повод
            <br />
            познакомиться
          </h1>
        </div>

        <p className="invitations-page-description">
          Приглашения от участников «СВОИ» —
          возможность увидеть культуру через
          людей, их семьи и повседневную жизнь.
        </p>
      </div>

      <div className="invitations-page-toolbar">
        <div className="page-filters">
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

        <span className="invitations-available">
          Сейчас доступно {filteredInvites.length}{' '}
          {filteredInvites.length === 1
            ? 'приглашение'
            : 'приглашений'}
        </span>
      </div>

      <div className="invitations-page-grid">
        {filteredInvites.map((invite) => (
          <InvitationCard
            key={invite.id}
            invite={invite}
            onOpen={onOpenInvite}
          />
        ))}
      </div>

      {filteredInvites.length === 0 && (
        <div className="empty-state">
          <p>
            В этой категории пока нет приглашений.
          </p>
        </div>
      )}
    </main>
  )
}

export default InvitationsPage