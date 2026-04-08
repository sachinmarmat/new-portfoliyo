export default function SectionHeader(props: { title: string; subtitle?: string }) {
  const { title, subtitle } = props
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-2xl text-sm text-zinc-300">{subtitle}</p> : null}
      </div>
      <div className="hidden h-px flex-1 bg-gradient-to-r from-white/10 to-transparent sm:block" />
    </div>
  )
}

