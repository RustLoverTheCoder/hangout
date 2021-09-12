import * as React from "react"
import { IoHelpCircleSharp, IoMail } from "react-icons/io5"
import { CgMenuLeft } from "react-icons/cg"
import { MdNotifications } from "react-icons/md"
import { AiFillPushpin } from "react-icons/ai"
import { Link } from "gatsby"

const ChatHeader = () => {
  return (
    <div
      className="w-full h-12 bg-primary flex justify-between items-center shadow px-2 text-interactive-normal flex-shrink-0">
      <div className="hidden md:flex">
        <Link
          to="/app/#xx"
          className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold"
        >
          好友
        </Link>
        <Link to="/app/#xx"
              className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          在线
        </Link>
        <Link to="/app/#xx"
              className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          全部
        </Link>
        <Link to="/app/#xx"
              className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          待定
        </Link>
        <Link to="/app/#xx"
              className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          已屏蔽
        </Link>
        <Link to="/app/#xx"
              className="px-2 mx-2 h-6 flex justify-center items-center hover:text-interactive-hover font-semibold">
          添加好友
        </Link>
      </div>
      <div className="w-10 flex justify-center items-center md:hidden">
        <CgMenuLeft className="text-2xl hover:text-interactive-hover" />
      </div>
      <div className="flex">
        <div className="w-10 flex justify-center items-center">
          <MdNotifications className="text-2xl hover:text-interactive-hover" />
        </div>
        <div className="w-10 flex justify-center items-center">
          <AiFillPushpin className="text-2xl hover:text-interactive-hover" />
        </div>
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
