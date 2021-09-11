import * as React from "react"
import { IoCheckmarkDoneSharp, IoChevronDownSharp } from "react-icons/io5"
import List from "../components/List"


const MessageContainerLayout = () => {
  return (
    <div className="flex-1 outline-none z-0 relative flex">
      <div
        className="absolute top-0 rounded-b-lg bg-message-bar left-4 right-4 z-10 h-6 opacity-95 cursor-pointer flex justify-between items-center text-white text-sm font-semibold px-3">
        <div>自上午8点以来来20条消息</div>
        <div className="flex justify-center items-center">标记已读 <IoCheckmarkDoneSharp className="ml-2" /></div>
      </div>
      <List />
      <div
        className="rounded-t-lg absolute -bottom-2 left-4 right-4 z-10 h-8 opacity-95 pb-2 bg-accent cursor-pointer  flex justify-between items-center text-white text-sm font-semibold px-3">
        <div>您正在查看以前的信息</div>
        <div className="flex justify-center items-center">跳转至当前 <IoChevronDownSharp className="ml-2" /></div>
      </div>
    </div>
  )
}

export default MessageContainerLayout
