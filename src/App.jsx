import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import InvitationsSection from './components/InvitationsSection'
import HowItWorks from './components/HowItWorks'
import StatsSection from './components/StatsSection'
import StoriesSection from './components/StoriesSection'
import NewsSection from './components/NewsSection'
import FAQSection from './components/FAQSection'
import StatusModal from './components/StatusModal'

import InvitationsPage from './pages/InvitationsPage'
import StoriesPage from './pages/StoriesPage'
import NewsPage from './pages/NewsPage'

function App() {
  const [page, setPage] = useState('home')
  const [modal, setModal] = useState(null)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [page])

  const goHome = () => {
    setPage('home')
  }

  const openInvitations = () => {
    setPage('invitations')
  }

  const openStories = () => {
    setPage('stories')
  }

  const openNews = () => {
    setPage('news')
  }

  const openInvite = (invite) => {
    if (invite === 'all') {
      openInvitations()
      return
    }

    setModal({
      type: 'invite',
      invite,
    })
  }

  const openStatusModal = () => {
    setModal({
      type: 'status',
    })
  }

  const closeModal = () => {
    setModal(null)
  }

  return (
    <>
      <Header
        onStatus={openStatusModal}
        onHome={goHome}
      />

      {page === 'home' && (
        <main id="top">
          <Hero />

          <InvitationsSection
            onOpenInvite={openInvite}
          />

          <HowItWorks />

          <StatsSection />

          <StoriesSection
            onOpen={openStories}
          />

          <NewsSection
            onOpen={openNews}
          />

          <FAQSection />

          <section className="final-cta">
            <p className="section-kicker">
              СВОИ
            </p>

            <h2>
              Иногда, чтобы
              <br />
              стать своими,
              <br />
              достаточно
              <br />
              одного приглашения.
            </h2>

            <p>
              Проект о том, как цифровое знакомство
              становится реальной встречей.
            </p>

            <button
              type="button"
              onClick={openStatusModal}
            >
              Присоединиться
              <span>↗</span>
            </button>
          </section>
        </main>
      )}

      {page === 'invitations' && (
        <InvitationsPage
          onBack={goHome}
          onOpenInvite={openInvite}
        />
      )}

      {page === 'stories' && (
        <StoriesPage
          onBack={goHome}
        />
      )}

      {page === 'news' && (
        <NewsPage
          onBack={goHome}
        />
      )}

      <footer className="site-footer">
        <div>
          <span className="footer-logo">
            СВОИ
          </span>

          <p>
            Платформа культурного обмена
            среди студентов.
          </p>
        </div>

        <span>
          Москва · 2026
        </span>
      </footer>

      <StatusModal
        type={modal?.type}
        invite={modal?.invite}
        onClose={closeModal}
      />
    </>
  )
}

export default App