interface SkipLinkProps {
  targetId?: string
}

export const SkipLink = ({ targetId = 'main-content' }: SkipLinkProps) => (
  <a className="skip-link" href={`#${targetId}`}>
    Skip to content
  </a>
)
