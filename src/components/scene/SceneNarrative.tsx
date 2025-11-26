interface SceneNarrativeProps {
  kicker: string
  title: string
  description: string
  bullets: string[]
}

export const SceneNarrative = ({ kicker, title, description, bullets }: SceneNarrativeProps) => (
  <article className="surface-card scene-narrative" data-animate="fade">
    <small>{kicker}</small>
    <h2>{title}</h2>
    <p>{description}</p>
    <ul>
      {bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  </article>
)
