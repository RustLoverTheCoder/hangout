import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const isBrowser = typeof window !== "undefined"


interface PropsTypes {
  children: React.ReactElement | Array<React.ReactElement>
}

const HomeBgLayout = ({ children }: PropsTypes) => {
  if (!isBrowser) return null
  if (innerWidth > 700) {
    return (
      <div className="w-full h-full relative">
        <StaticImage
          src="../images/home_bg.png"
          quality={75}
          className="w-full h-full"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="bg"
          loading="eager"
          imgClassName="h-full md:w-full object-cover md:object-cover md:object-right"
        />
        <div className="absolute top-0 right-0 left-0 bottom-0">
          {children}
        </div>
      </div>
    )
  }
  return (
    <div className="w-full h-full relative">
      <StaticImage
        src="../images/home_bg_mini.png"
        quality={75}
        className="w-full h-full"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="bg"
        loading='eager'
        imgClassName='h-full md:w-full object-cover md:object-contain md:object-right'
      />
      <div className="absolute top-0 right-0 left-0 bottom-0">
        {children}
      </div>
    </div>
  )

}

export default HomeBgLayout
