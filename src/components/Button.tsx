import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30'

const variants: Record<Variant, string> = {
  primary:
    'bg-white text-zinc-950 hover:bg-zinc-100 active:bg-zinc-200 shadow-sm shadow-black/20',
  secondary:
    'bg-white/10 text-white hover:bg-white/15 active:bg-white/20 ring-1 ring-white/15',
  ghost: 'text-white/90 hover:bg-white/10 active:bg-white/15',
}

export function Button(
  props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & { variant?: Variant },
) {
  const { className, variant = 'primary', children, ...rest } = props
  return (
    <button className={[base, variants[variant], className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </button>
  )
}

export function ButtonLink(
  props: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & { variant?: Variant },
) {
  const { className, variant = 'primary', children, ...rest } = props
  return (
    <a className={[base, variants[variant], className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </a>
  )
}

