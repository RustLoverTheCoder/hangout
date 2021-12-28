import * as React from 'react'
import { HiCheck } from 'react-icons/hi'
import dog from '../../images/dog@2x.png'

const User = () => {
  return (
    <div className="ml-2 relative">
      <div className="flex rounded h-10.5 px-2 hover:bg-modifier-selected items-center text-channel-default hover:text-white">
        <div className="w-8 h-8 mr-3 shrink-0 flex justify-center items-center">
          <img src={dog} alt="" className="w-8 h-8 rounded-full relative" />
        </div>
        <div className="truncate flex-1">
          <div className="flex justify-start items-center">
            <div className="truncate leading-5 font-medium ">Amckjsad sdkjasd</div>
            <span className="h-3.75 rounded px-1 bg-brand flex justify-center items-center">
              <HiCheck className="text-xs text-white -ml-1" />
              <span className="text-xxs text-white leading-4 font-medium">机器人</span>
            </span>
          </div>
          <div className="-mt-0.5 truncate">
            <div className="text-xs leading-4 flex items-center text-channel-default font-medium">
              <div className="w-full truncate flex">
                正在听
                <span className="font-semibold ml-0.5 truncate">周杰伦 | 双节棍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
