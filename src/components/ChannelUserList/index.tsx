import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { IoAccessibilitySharp, IoAddSharp } from 'react-icons/io5'

const ChannelUserList = () => {
  const userList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14]
  return (
    <div className="w-full pl-2 flex flex-col gap-y-px">
      <Link to="/" className="w-full shrink-0" style={{ maxWidth: '224px' }}>
        <div className="rounded flex h-10.5 px-2 hover:bg-modifier-selected flex items-center justify-start overflow-hidden">
          <div className="w-8 h-8 shrink-0 flex justify-center items-center">
            <IoAccessibilitySharp className="text-xl text-white" />
          </div>
          <div className="ml-3 flex-1 text-white text-base font-semibold">好友</div>
        </div>
      </Link>
      <div
        className="pt-4.5 pr-2 pb-1 pl-2.5 text-xs text-white flex justify-between items-center shrink-0 w-full"
        style={{ maxWidth: '224px' }}
      >
        私信
        <IoAddSharp className="text-white text-base mr-0.5 cursor-pointer" />
      </div>
      {userList.map((user) => (
        <Link to="/" className="w-full" style={{ maxWidth: '224px' }}>
          <div className="rounded flex h-10.5 px-2 hover:bg-modifier-selected flex items-center justify-start overflow-hidden">
            <div className="w-8 h-8 shrink-0">
              <StaticImage
                src="../../images/gatsby-icon.png"
                width={32}
                quality={100}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="A Gatsby astronaut"
                style={{ borderRadius: 32 }}
              />
            </div>
            <div className="ml-3 flex-1">
              <div
                className="truncate block h-5 text-base text-white"
                style={{ lineHeight: '1.25rem', maxWidth: '9.75rem' }}
              >
                Saya
              </div>
              <div
                className="h-4 truncate block text-xs text-white"
                style={{ lineHeight: '1rem', maxWidth: '9.75rem' }}
              >
                正在玩 原神
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default ChannelUserList
