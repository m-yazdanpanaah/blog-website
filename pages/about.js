import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'
import Link from '@/components/Link'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl text-hearth font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Product Design and Web Developement</div>
            <div className="text-gray-500 dark:text-gray-400">Live in Iran/Qom</div>
          </div>
          <div className="pt-20 pb-8 pb-8 max-w-none xl:col-span-2">
              <h3 className="text-xl font-medium mb-3 leading-relaxed">A <span className="text-hearth"> 23 </span> year old  <span className="text-hearth">product designer</span> and <span className="text-hearth">web developer</span> with <span className="text-hearth">4 years</span> experience, Who is <span className="text-hearth">passionate</span> about life and specially, about
                his <span className="text-hearth"> career </span><br/> His main Specialty is <span className="text-hearth"> UI/UX design </span> but he is experiencing <span className="text-hearth"> web developement </span> using <span className="text-hearth"> Angular </span> and <span className="text-hearth"> React js </span>.  </h3>
            <div className="pt-8">
            <Link
              href={``}
              className="text-blue-500 pt-8 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label={``}
            >
              <button className="group btn px-4 py-2 flex items-center gap-4">
                Visit My Website
              </button>
            </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
