import { useState } from 'react'

function Header({ onStatus, onHome }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const goToSection = (section) => {
    closeMenu()

    if (onHome) {
      onHome()

      setTimeout(() => {
        const element = document.getElementById(section)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)

      return
    }

    const element = document.getElementById(section)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleStatus = () => {
    closeMenu()
    onStatus?.()
  }

  const handleLogoClick = (event) => {
    event.preventDefault()
    closeMenu()

    if (onHome) {
      onHome()

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }, 100)

      return
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <header className="site-header">
      <a
        href="#top"
        className="logo"
        onClick={handleLogoClick}
      >
        СВОИ
      </a>

      <nav
        className="main-nav"
        aria-label="Основная навигация"
      >
        <a
          href="#invitations"
          onClick={(event) => {
            event.preventDefault()
            goToSection('invitations')
          }}
        >
          Приглашения
        </a>

        <a
          href="#about"
          onClick={(event) => {
            event.preventDefault()
            goToSection('about')
          }}
        >
          О проекте
        </a>

        <a
          href="#stories"
          onClick={(event) => {
            event.preventDefault()
            goToSection('stories')
          }}
        >
          Истории
        </a>

        <a
          href="#news"
          onClick={(event) => {
            event.preventDefault()
            goToSection('news')
          }}
        >
          Новости
        </a>

        <a
          href="#statistics"
          onClick={(event) => {
            event.preventDefault()
            goToSection('statistics')
          }}
        >
          Статистика
        </a>

        <a
          href="#faq"
          onClick={(event) => {
            event.preventDefault()
            goToSection('faq')
          }}
        >
          FAQ
        </a>
      </nav>

      <div className="header-actions">
        <button
          type="button"
          className="login-button"
          onClick={handleStatus}
        >
          Войти
        </button>

        <button
          type="button"
          className="join-button"
          onClick={handleStatus}
        >
          Присоединиться
        </button>

        <button
          type="button"
          className="menu-button"
          aria-label={
            menuOpen
              ? 'Закрыть меню'
              : 'Открыть меню'
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((value) => !value)
          }
        >
          <span className="menu-icon">
            <span />
            <span />
          </span>

          <span className="menu-label">
            {menuOpen ? 'Закрыть' : 'Меню'}
          </span>
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav aria-label="Мобильная навигация">
            <a
              href="#invitations"
              onClick={(event) => {
                event.preventDefault()
                goToSection('invitations')
              }}
            >
              Приглашения
            </a>

            <a
              href="#about"
              onClick={(event) => {
                event.preventDefault()
                goToSection('about')
              }}
            >
              О проекте
            </a>

            <a
              href="#stories"
              onClick={(event) => {
                event.preventDefault()
                goToSection('stories')
              }}
            >
              Истории
            </a>

            <a
              href="#news"
              onClick={(event) => {
                event.preventDefault()
                goToSection('news')
              }}
            >
              Новости
            </a>

            <a
              href="#statistics"
              onClick={(event) => {
                event.preventDefault()
                goToSection('statistics')
              }}
            >
              Статистика
            </a>

            <a
              href="#faq"
              onClick={(event) => {
                event.preventDefault()
                goToSection('faq')
              }}
            >
              FAQ
            </a>
          </nav>

          <div className="mobile-menu-actions">
            <button
              type="button"
              className="mobile-login"
              onClick={handleStatus}
            >
              Войти
            </button>

            <button
              type="button"
              className="mobile-join"
              onClick={handleStatus}
            >
              Присоединиться
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header