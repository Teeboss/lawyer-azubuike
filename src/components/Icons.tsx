import type { JSX } from 'react'

export type IconProps = { size?: number; className?: string }
export type IconComponent = (props: IconProps) => JSX.Element
export type IconSet = Record<string, IconComponent>

export const Icon: IconSet = {
  Arrow: ({ size = 16, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  ArrowUR: ({ size = 14, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  ),
  Scale: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M16 4v24M8 28h16M6 11h20M11 11l-5 9a5 5 0 0 0 10 0l-5-9zM21 11l-5 9a5 5 0 0 0 10 0l-5-9z" />
    </svg>
  ),
  Gavel: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="m11 21-7 7M14 18l4-4M9 13l10-10M6 16l10-10M19 16 9 6M22 13l4 4M3 28h14" />
    </svg>
  ),
  Shield: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M16 4 5 8v8c0 7 5 11 11 12 6-1 11-5 11-12V8L16 4z" />
      <path d="m11 16 4 4 6-7" />
    </svg>
  ),
  House: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <path d="M4 14 16 4l12 10v14H4V14zM12 28v-9h8v9" />
    </svg>
  ),
  Globe: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <circle cx="16" cy="16" r="12" />
      <path d="M4 16h24M16 4c4 4 4 20 0 24M16 4c-4 4-4 20 0 24" />
    </svg>
  ),
  Family: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <circle cx="11" cy="10" r="4" /><circle cx="22" cy="11" r="3" />
      <path d="M4 26c0-5 3-8 7-8s7 3 7 8M19 26c0-4 2-6 5-6s5 2 5 6" />
    </svg>
  ),
  Doc: ({ size = 18, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className={className}>
      <path d="M6 3h9l4 4v14H6zM15 3v4h4M9 12h7M9 16h7M9 8h3" />
    </svg>
  ),
  Quote: ({ size = 28, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className}>
      <path d="M9 8c-3 1-5 4-5 8v8h8v-8H7c0-3 1-5 4-6L9 8zm12 0c-3 1-5 4-5 8v8h8v-8h-5c0-3 1-5 4-6l-2-2z" />
    </svg>
  ),
  Star: ({ size = 12, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2 14.6 8.6 22 9.3l-5.6 4.9L18.2 22 12 18 5.8 22l1.8-7.8L2 9.3l7.4-.7z" />
    </svg>
  ),
  Phone: ({ size = 16, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className={className}>
      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  Mail: ({ size = 16, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className={className}>
      <path d="M3 6h18v12H3zM3 6l9 7 9-7" />
    </svg>
  ),
  Pin: ({ size = 16, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" className={className}>
      <path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  Plus: ({ size = 14, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Check: ({ size = 14, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  ),
  Award: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <circle cx="16" cy="13" r="8" />
      <path d="M11 19 8 29l8-4 8 4-3-10" />
    </svg>
  ),
  Lock: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <rect x="6" y="14" width="20" height="14" />
      <path d="M10 14V9a6 6 0 0 1 12 0v5" />
    </svg>
  ),
  Clock: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <circle cx="16" cy="16" r="12" />
      <path d="M16 8v8l5 3" />
    </svg>
  ),
  People: ({ size = 22, className = "" }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" className={className}>
      <circle cx="11" cy="11" r="4" /><circle cx="22" cy="12" r="3.5" />
      <path d="M3 26c0-4 4-8 8-8s8 4 8 8M19 26c0-3 3-6 6-6s5 2 5 6" />
    </svg>
  ),
}
