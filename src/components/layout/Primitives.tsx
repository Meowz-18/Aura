import { HTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'classnames'

type GapScale = '2xs' | 'xs' | 'sm' | 'md' | 'lg'

const gapToken: Record<GapScale, string> = {
  '2xs': 'var(--space-2xs)',
  xs: 'var(--space-xs)',
  sm: 'var(--space-sm)',
  md: 'var(--space-md)',
  lg: 'var(--space-lg)',
}

interface PrimitiveProps extends HTMLAttributes<HTMLDivElement> {
  gap?: GapScale
}

export const Stack = ({ gap = 'md', className, style, children, ...rest }: PropsWithChildren<PrimitiveProps>) => (
  <div className={clsx('stack', className)} style={{ gap: gapToken[gap], ...style }} {...rest}>
    {children}
  </div>
)

interface ClusterProps extends PrimitiveProps {
  justify?: 'start' | 'center' | 'between'
}

export const Cluster = ({
  gap = 'sm',
  className,
  justify = 'start',
  style,
  children,
  ...rest
}: PropsWithChildren<ClusterProps>) => (
  <div
    className={clsx('cluster', className)}
    style={{
      gap: gapToken[gap],
      justifyContent: justify === 'between' ? 'space-between' : justify === 'center' ? 'center' : 'flex-start',
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
)
