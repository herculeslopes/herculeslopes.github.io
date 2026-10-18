import type { ReactNode } from 'react'

type MarkProps = { className?: string; label?: string }

function Mark({
  className,
  label,
  children,
  viewBox = '0 0 24 24',
}: MarkProps & { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {children}
    </svg>
  )
}

export function ReactMark({ className, label }: MarkProps) {
  return (
    <Mark className={className} label={label}>
      <circle cx="12" cy="12" r="2.05" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1.15">
        <ellipse cx="12" cy="12" rx="10.15" ry="3.85" />
        <ellipse cx="12" cy="12" rx="10.15" ry="3.85" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10.15" ry="3.85" transform="rotate(120 12 12)" />
      </g>
    </Mark>
  )
}

export function NextMark({ className, label }: MarkProps) {
  return (
    <Mark className={className} label={label}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        fill="var(--bg)"
        d="M7.7 16.7V7.3h1.85l4.9 6.55V7.3H16.3v9.4h-1.85L9.55 10.15v6.55H7.7Z"
      />
    </Mark>
  )
}

export function QueryMark({ className, label }: MarkProps) {
  return (
    <Mark className={className} label={label}>
      <path
        fill="currentColor"
        d="M3.1 17.6 12.2 3.4l2.15 1.35-7.7 12.85H3.1Zm7.15-1.7 8.7 4.55-1.7 2.15-6.15-3.2V8.7l1.85 1.15-2.7 6.05Z"
      />
    </Mark>
  )
}

export function TailwindMark({ className, label }: MarkProps) {
  return (
    <Mark className={className} label={label}>
      <path
        fill="currentColor"
        d="M12 6.1c-2.7 0-4.4 1.35-5.1 4.05 1-.1 1.85.1 2.55.55.55.35 1 1.05 1.45 1.9C11.7 14.2 12.7 15.4 15.1 15.4c2.7 0 4.4-1.35 5.1-4.05-1 .1-1.85-.1-2.55-.55-.55-.35-1-1.05-1.45-1.9C15.4 7.3 14.4 6.1 12 6.1Zm-6 6.3c-2.7 0-4.4 1.35-5.1 4.05 1-.1 1.85.1 2.55.55.55.35 1 1.05 1.45 1.9.8 1.6 1.8 2.8 4.2 2.8 2.7 0 4.4-1.35 5.1-4.05-1 .1-1.85-.1-2.55-.55-.55-.35-1-1.05-1.45-1.9-.8-1.6-1.8-2.8-4.2-2.8Z"
      />
    </Mark>
  )
}

export function MotionMark({ className, label }: MarkProps) {
  return (
    <Mark className={className} label={label}>
      <circle cx="9" cy="12" r="3.1" fill="currentColor" />
      <path
        d="M12.2 7.1a6.2 6.2 0 0 1 0 9.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M15.1 5.2a9.2 9.2 0 0 1 0 13.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </Mark>
  )
}

export function TypeScriptMark({ className, label }: MarkProps) {
  return (
    <Mark className={className} label={label}>
      <rect width="24" height="24" rx="4" fill="currentColor" />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fill="var(--bg)"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9"
        fontWeight="700"
      >
        TS
      </text>
    </Mark>
  )
}

export function SupabaseMark({ className, label = 'Supabase' }: MarkProps) {
  return (
    <Mark className={className ?? 'brand-mark'} label={label} viewBox="0 0 109 113">
      <path
        fill="#3ECF8E"
        d="M63.7 110.3c-2.2 3.5-7.7 1.9-7.7-2.2V70.2H13.6c-5.6 0-8.6-6.5-5-10.7L47.3 2.7c2.2-3.5 7.7-1.9 7.7 2.2v37.8h42.4c5.6 0 8.6 6.5 5 10.7l-38.7 56.9Z"
      />
    </Mark>
  )
}

export function N8nLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? 'brand-mark brand-mark-wide'}
      viewBox="0 0 176 48"
      role="img"
      aria-label="n8n"
    >
      <circle cx="11" cy="24" r="6.5" fill="#EA4B71" />
      <circle cx="30" cy="11" r="5" fill="#EA4B71" />
      <circle cx="30" cy="37" r="5" fill="#EA4B71" />
      <path
        d="M16.6 21.2 25.2 13.6M16.6 26.8 25.2 34.4"
        fill="none"
        stroke="#EA4B71"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <text
        x="46"
        y="34"
        fill="#EA4B71"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="34"
        fontWeight="700"
      >
        n8n
      </text>
    </svg>
  )
}

export function ReactLogo() {
  return <ReactMark className="brand-mark brand-react" label="React" />
}
