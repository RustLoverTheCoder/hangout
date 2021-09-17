import * as React from 'react'
import { PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const isBrowser = typeof window !== 'undefined'

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  if (!isBrowser) {
    return null
  }
  const windowWidth = window.innerWidth
  return (
    <div className="w-full h-full flex justify-center items-center">
      {windowWidth < 800 ? (
        <StaticImage
          src="../images/home_bg_mini.png"
          quality={75}
          className="h-full object-cover md:w-full"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="背景"
        />
      ) : (
        <StaticImage
          src="../images/home_bg.png"
          quality={75}
          className="h-full object-cover md:w-full"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="背景"
        />
      )}
    </div>
  )
}

export default IndexPage
