import * as React from "react"
import ChatHeader from "../components/ChatHeader"
import ChatContainerLayout from './ChatContainerLayout'

const ChatLayout = () => {
  return (
    <div className="flex-1 bg-primary flex flex-col">
      <ChatHeader />
      <div className='flex w-full h-full'>
        <ChatContainerLayout />
        <div className='h-full w-60 bg-secondary hidden lg:flex flex-shrink-0'></div>
      </div>
    </div>
  )
}

export default ChatLayout
