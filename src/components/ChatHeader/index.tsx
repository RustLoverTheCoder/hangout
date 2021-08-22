import * as React from "react"
import { IoHelpCircleSharp, IoMail, IoAccessibility } from "react-icons/io5"

const ChatHeader = () => {
  return (
    <div className="w-full h-12 bg-primary flex justify-between items-center shadow px-2 text-interactive-normal">
      <div className="flex">
        <div className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          好友
        </div>
        <div className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          在线
        </div>
        <div className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          全部
        </div>
        <div className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          待定
        </div>
        <div className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          已屏蔽
        </div>
        <div className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          添加好友
        </div>
      </div>
      <div className="flex">
        <div className="w-10 flex justify-center items-center">
          <IoMail className="text-2xl hover:text-interactive-hover" />
        </div>
        <div className="w-10 flex justify-center items-center">
          <IoHelpCircleSharp className="text-2xl hover:text-interactive-hover" />
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
