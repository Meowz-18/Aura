import '../../styles/knowledge-capsule.scss'

interface KnowledgeCapsuleProps {
  title: string
  content: string
  icon?: string
}

export const KnowledgeCapsule = ({ title, content, icon = '💡' }: KnowledgeCapsuleProps) => {
  return (
    <div className="knowledge-capsule" role="note">
      <div className="knowledge-capsule__icon" aria-hidden="true">{icon}</div>
      <div className="knowledge-capsule__content">
        <h4 className="knowledge-capsule__title">{title}</h4>
        <p className="knowledge-capsule__text">{content}</p>
      </div>
    </div>
  )
}
