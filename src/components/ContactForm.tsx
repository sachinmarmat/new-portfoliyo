import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from './Button'

type Status = 'idle' | 'sending' | 'success' | 'error'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export default function ContactForm() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

  const enabled = Boolean(serviceId && templateId && publicKey)

  const [name, setName] = useState('')
  const [fromEmail, setFromEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorText, setErrorText] = useState<string | null>(null)

  const canSubmit = useMemo(() => {
    if (!enabled) return false
    if (!name.trim()) return false
    if (!isValidEmail(fromEmail)) return false
    if (!subject.trim()) return false
    if (message.trim().length < 10) return false
    return status !== 'sending'
  }, [enabled, name, fromEmail, subject, message, status])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorText(null)

    if (!enabled) {
      setStatus('error')
      setErrorText(
        'Email sending is not configured yet. Add EmailJS env variables and restart the dev server.',
      )
      return
    }

    if (!canSubmit) return

    try {
      setStatus('sending')
      const cleanName = name.trim()
      const cleanEmail = fromEmail.trim()
      const cleanSubject = subject.trim()
      const cleanMessage = message.trim()
      const formattedMessage =
        `From Name: ${cleanName}\n` +
        `From Email: ${cleanEmail}\n` +
        `Subject: ${cleanSubject}\n\n` +
        `Message:\n${cleanMessage}`

      await emailjs.send(
        serviceId!,
        templateId!,
        {
          from_name: cleanName,
          from_email: cleanEmail,
          email: cleanEmail,
          sender_email: cleanEmail,
          reply_to: cleanEmail,
          subject: cleanSubject,
          user_subject: cleanSubject,
          title: cleanSubject,
          message: formattedMessage,
          raw_message: cleanMessage,
          sender_info: `Name: ${cleanName}, Email: ${cleanEmail}`,
        },
        { publicKey: publicKey! },
      )
      setStatus('success')
      setName('')
      setFromEmail('')
      setSubject('')
      setMessage('')
    } catch (err) {
      setStatus('error')
      const message =
        typeof err === 'object' && err && 'text' in err
          ? String((err as { text?: unknown }).text ?? 'Failed to send.')
          : 'Failed to send.'
      setErrorText(`${message} Please try again or contact me directly.`)
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {!enabled ? (
        <div className="rounded-xl bg-amber-500/10 p-4 text-sm text-amber-200 ring-1 ring-amber-500/20">
          Email sending is not configured yet. Add EmailJS keys in a <code>.env</code> file (see{' '}
          <code>.env.example</code>), then restart.
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm text-zinc-200">Your name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-white/25"
            placeholder="Enter your name"
            autoComplete="name"
          />
        </label>
        <label className="space-y-1">
          <span className="text-sm text-zinc-200">Your email</span>
          <input
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            className="w-full rounded-xl bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-white/25"
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="space-y-1">
        <span className="text-sm text-zinc-200">Subject</span>
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-white/25"
          placeholder="Project inquiry"
        />
      </label>

      <label className="space-y-1">
        <span className="text-sm text-zinc-200">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-32 w-full resize-y rounded-xl bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-white/25"
          placeholder="Tell me about your project..."
        />
        <div className="text-xs text-zinc-500">Minimum 10 characters.</div>
      </label>

      {status === 'success' ? (
        <div className="rounded-xl bg-emerald-500/10 p-4 text-sm text-emerald-200 ring-1 ring-emerald-500/20">
          Message sent successfully. I’ll get back to you soon.
        </div>
      ) : null}

      {status === 'error' && errorText ? (
        <div className="rounded-xl bg-rose-500/10 p-4 text-sm text-rose-200 ring-1 ring-rose-500/20">
          {errorText}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={!canSubmit} variant="primary" className="disabled:opacity-50">
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </Button>
        <span className="text-xs text-zinc-500">You’ll receive a confirmation after sending.</span>
      </div>
    </form>
  )
}

