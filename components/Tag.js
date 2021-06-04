import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium text-hearth uppercase hover:text-blood dark:hover:text-blue-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
