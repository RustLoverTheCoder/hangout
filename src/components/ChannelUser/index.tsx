import * as React from "react"
import { IoSettingsSharp, IoHeadsetSharp, IoMicSharp } from "react-icons/io5"
import { StaticImage } from "gatsby-plugin-image"

const ChannelUser = () => {
  return (
    <div className="w-full h-13 px-2 flex items-center">
      <StaticImage
        src="../../images/gatsby-icon.png"
        width={32}
        quality={100}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ borderRadius: 48, flexShrink: 0 }}
      />
      <div className='ml-2 w-20 overflow-hidden'>
        <div className='text-sm text-header-primary truncate'>1233123123</div>
        <div className='text-xs text-header-secondary'>#2512</div>
      </div>
      <IoMicSharp className="text-xl text-interactive-normal hover:text-interactive-hover mx-1.5" />
      <IoHeadsetSharp className="text-xl text-interactive-normal hover:text-interactive-hover mx-1.5" />
      <IoSettingsSharp className="text-xl text-interactive-normal hover:text-interactive-hover mx-1.5" />
    </div>
  )
}

export default ChannelUser
