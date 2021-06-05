import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm rounded-md bg-hearth font-bold text-white  uppercase hover:text-blood dark:hover:text-blue-400">
        <div className="p-1">
        {text.split(' ').join('-')}
        </div>
      </a>
    </Link>
  )
}

export default Tag
