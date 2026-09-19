function InvitationCard({
  invite,
  featured = false,
  onOpen,
}) {
  return (
    <article
      className={`invitation-card ${
        featured ? 'is-featured' : ''
      }`}
      onClick={() => onOpen?.(invite)}
    >
      <div className="invitation-top">
        <span className="invitation-category">
          {invite.category}
        </span>

        <span className="invitation-location">
          {invite.location}
        </span>
      </div>

      <div className="invitation-body">
        <h3>{invite.title}</h3>

        <p>{invite.description}</p>
      </div>

      <div className="invitation-bottom">
        <div className="invitation-author-block">
          <div className="invitation-avatar-wrap">
            <img
              className="invitation-avatar"
              src={invite.avatar}
              alt=""
            />
          </div>

          <div className="invitation-author-info">
            <span className="invitation-author-label">
              Приглашает
            </span>

            <span className="invitation-author">
              {invite.author}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="invitation-button"
          onClick={(event) => {
            event.stopPropagation()
            onOpen?.(invite)
          }}
        >
          <span>Откликнуться</span>
          <span className="invitation-button-arrow">
            ↗
          </span>
        </button>
      </div>
    </article>
  )
}

export default InvitationCard