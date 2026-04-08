import type { PropsWithChildren } from 'react'

export default function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/15">
      {children}
    </span>
  )
}

