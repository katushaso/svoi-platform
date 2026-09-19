function StatusModal({ type, invite, onClose }) {
  if (!type) {
    return null
  }

  const isInvite = type === 'invite'

  return (
    <div
      className="project-status-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="project-status-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-status-title"
      >
        <button
          type="button"
          className="project-status-close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          <span />
          <span />
        </button>

        {isInvite && invite ? (
          <>
            <p className="section-kicker">
              ПРИГЛАШЕНИЕ
            </p>

            <h2 id="project-status-title">
              {invite.title}
            </h2>

            <p className="project-status-text">
              Основной период реализации проекта
              завершён. Сейчас откликнуться на это
              приглашение уже нельзя.
            </p>

            <div className="project-status-author">
              <div className="project-status-avatar">
                <img
                  src={invite.avatar}
                  alt=""
                />
              </div>

              <span>{invite.author}</span>
            </div>
          </>
        ) : (
          <>
            <p className="section-kicker">
              СВОИ
            </p>

            <h2 id="project-status-title">
              Основной период реализации проекта
              завершён
            </h2>

            <p className="project-status-text">
              Спасибо за интерес к «СВОИ».
              Сейчас регистрация и новые
              взаимодействия недоступны.
            </p>
          </>
        )}

        <button
          type="button"
          className="project-status-action"
          onClick={onClose}
        >
          Понятно
        </button>
      </div>
    </div>
  )
}

export default StatusModal