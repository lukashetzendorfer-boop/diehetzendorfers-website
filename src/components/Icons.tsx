interface IconProps {
  size?: number
  className?: string
}

export function BoltIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <polygon
        points="13,2 6,13 12,13 11,22 18,11 12,11"
        fill="#00e5ff"
        stroke="#ff6b2b"
        strokeWidth="0.5"
      />
    </svg>
  )
}

export function PlayIcon({ size = 24, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="10,8 17,12 10,16" fill="currentColor" />
    </svg>
  )
}

export function ArrowRight({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CheckIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StarIcon({ size = 18, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor" className={className}>
      <polygon points="9,2 11.2,6.5 16,7.3 12.5,10.8 13.4,16 9,13.7 4.6,16 5.5,10.8 2,7.3 6.8,6.5" />
    </svg>
  )
}

export function InstagramIcon({ size = 22, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function LinkedinIcon({ size = 22, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 014 0v4M11 10v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function MailIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function SportIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 16h26M16 3v26M6 7l20 18M26 7L6 25" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  )
}

export function MediaIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="3" y="6" width="26" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 26h4M10 26h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="24" cy="10" r="1.5" fill="currentColor" />
    </svg>
  )
}

export function WorkshopIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="4" y="4" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 22v6M22 22v6M7 28h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 10h12M10 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function TrophyIcon({ size = 32, className = '' }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M10 4h12v10a6 6 0 01-12 0V4z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8H6a3 3 0 003 3M22 8h4a3 3 0 01-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 20v5M11 28h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 25h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
