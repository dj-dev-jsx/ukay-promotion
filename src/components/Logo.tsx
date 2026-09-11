export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      <span className="text-charcoal">Ukay</span>
      <span className="text-green-800">App</span>
    </span>
  )
}
