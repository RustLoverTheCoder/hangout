import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { IoChatbox } from 'react-icons/io5'
import { RiMore2Fill } from 'react-icons/ri'

const People = () => {
  return (
    <>
      <div className="ml-7.5 mr-5 h-px bg-modifier-accent" />
      <div className="h-15.5 ml-5.5 px-2 mr-3 rounded-lg flex items-center justify-between cursor-pointer hover:bg-modifier-selected text-people hover:text-header-secondary">
        <div className="h-full flex items-center">
          <StaticImage
            src="../../images/gatsby-icon.png"
            width={32}
            quality={100}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="A Gatsby astronaut"
            style={{ borderRadius: 32 }}
          />
          <div className="ml-3">
            <div className="flex items-center">
              <div className="text-header-primary font-semibold truncate text-base">pupu9996</div>
              <span className="text-sm leading-4">#9996</span>
            </div>
            <div className="text-sm text-header-secondary">闲置</div>
          </div>
        </div>
        <div className="ml-2 flex">
          <div className="w-9 h-9 rounded-full cursor-pointer flex justify-center items-center bg-secondary text-interactive-normal">
            <IoChatbox className="text-lg" />
          </div>
          <div className="w-9 h-9 rounded-full cursor-pointer flex justify-center items-center ml-2.5 bg-secondary text-interactive-normal">
            <RiMore2Fill className="text-lg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default People
