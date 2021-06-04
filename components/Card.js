import Image from 'next/image'
import Link from '@/components/Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
    <div className="h-full rounded-2xl shadow-md overflow-hidden">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="lg:h-48 md:h-36 object-cover object-center"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="lg:h-48 md:h-36 object-cover object-center"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl text-hearth font-bold leading-8 tracking-tight mb-3">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base text-hearth font-medium leading-6 hover:text-blood dark:hover:text-blue-400"
            aria-label={`Link to ${title}`}
          >
            <button className="group btn px-4 py-2 flex items-center gap-4">
              Read more
            </button>
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
