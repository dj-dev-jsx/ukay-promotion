export function ProductImage({
  src,
  alt,
  className = '',
  imgClassName = '',
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}) {
  return (
    <div className={`relative overflow-hidden bg-charcoal-soft/10 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover transition duration-500 ${imgClassName}`}
      />
    </div>
  )
}
