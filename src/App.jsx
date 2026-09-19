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
    <div className="app-shell">
      <Header
        onStatus={openStatusModal}
        onHome={goHome}
      />

      {page === 'home' && (
        <main id="top">
          <Hero />

          {/* Живая бегущая лента */}
          <section className="moving-ticker" aria-label="СВОИ">
            <div className="ticker-track">
              <div className="ticker-content">
                <span>СВОИ</span>
                <i>✦</i>
                <span>НОВЫЕ ВСТРЕЧИ</span>
                <i>✦</i>
                <span>НОВЫЕ ЛЮДИ</span>
                <i>✦</i>
                <span>ИСТОРИИ</span>
                <i>✦</i>
                <span>ПРИГЛАШЕНИЯ</span>
                <i>✦</i>
                <span>СВОИ</span>
                <i>✦</i>
                <span>НОВЫЕ ВСТРЕЧИ</span>
                <i>✦</i>
                <span>НОВЫЕ ЛЮДИ</span>
                <i>✦</i>
                <span>ИСТОРИИ</span>
                <i>✦</i>
                <span>ПРИГЛАШЕНИЯ</span>
                <i>✦</i>
              </div>
            </div>
          </section>

          <InvitationsSection
            onOpenInvite={openInvite}
          />

          {/* Небольшой «живой» слой между основными секциями */}
          <section className="live-section">
            <div className="live-orbit live-orbit-one" />
            <div className="live-orbit live-orbit-two" />

            <div className="live-inner">
              <div className="live-label">
                <span className="live-dot" />
                Сейчас в СВОИХ
              </div>

              <div className="live-main">
                <div>
                  <strong>4</strong>
                  <span>человека сейчас смотрят приглашения</span>
                </div>

                <div>
                  <strong>6</strong>
                  <span>новых приглашений доступно</span>
                </div>

                <div>
                  <strong>0</strong>
                  <span>встреч проходят сегодня</span>
                </div>
              </div>

              
            </div>
          </section>

          <HowItWorks />

          <StatsSection />

          <StoriesSection
            onOpen={openStories}
          />

          <NewsSection
            onOpen={openNews}
          />

          {/* Дополнительная лента перед FAQ */}
          <section className="quote-strip">
            <div className="quote-strip-mark">“</div>

            <p>
            Здесь чужой становится своим.
            </p>

            <span>СВОИ · реальные встречи</span>
          </section>

          <FAQSection />

          <section className="final-cta">
            <div className="cta-glow" />

            <div className="cta-floating cta-floating-one">
              <span>✦</span>
              встречаться
            </div>

            <div className="cta-floating cta-floating-two">
              быть своими
              <span>↗</span>
            </div>

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
        <div className="footer-main">
          <span className="footer-logo">
            СВОИ
          </span>

          <p>
            Платформа культурного обмена
            среди студентов.
          </p>
        </div>

        <div className="footer-center">
          <span className="footer-status">
            <i />
            проект работает
          </span>

          <span>
            Москва · 2026
          </span>
        </div>

        <div className="footer-mark">
          <span>✦</span>
          <span>быть ближе</span>
        </div>
      </footer>

      <StatusModal
        type={modal?.type}
        invite={modal?.invite}
        onClose={closeModal}
      />
    </div>
  )
}

export default App