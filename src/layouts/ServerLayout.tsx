import * as React from 'react'
import { HiOutlineHashtag } from 'react-icons/hi'

interface serverLayoutProps {}

const ServerLayout: React.FC<serverLayoutProps> = ({ children }) => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  return (
    <div className="w-60 h-full bg-secondary relative">
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <div className="w-full h-full relative  flex flex-col overflow-y-auto">
          <div className="w-full  shrink-0" style={{ height: 135 }}>
            12
          </div>
          {list.map((item, index) => (
            <div className="w-full h-8.5 px-2 shrink-0" key={item}>
              <div className="w-full rounded h-full hover:bg-modifier-selected flex justify-start items-center px-2 text-channel-default hover:text-white">
                <HiOutlineHashtag className="text-xl" />
                <span>123123</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServerLayout
