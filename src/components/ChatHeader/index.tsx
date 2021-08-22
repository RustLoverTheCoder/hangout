import * as React from "react"
import { IoHelpCircleSharp, IoMail } from "react-icons/io5"

const ChatHeader = () => {
  return (
    <div className="w-full h-12 bg-primary flex justify-between items-center shadow px-2">
      <div></div>
      <div className="flex">
        <div className="w-10 flex justify-center items-center">
          <IoMail className="text-interactive-normal hover:text-interactive-hover text-2xl" />
        </div>
        <div className="w-10 flex justify-center items-center">
          <IoHelpCircleSharp className="text-interactive-normal hover:text-interactive-hover text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default ChatHeader
