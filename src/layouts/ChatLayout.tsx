import * as React from 'react'
import ChatHeader from '../components/ChatHeader'
import ChatContainerLayout from './ChatContainerLayout'
import UserList from '../components/UserList'

const ChatLayout = () => {
  return (
    <div className="flex-1 bg-primary flex flex-col">
      <ChatHeader />
      <div className="flex w-full h-full relative">
        <ChatContainerLayout />
        <UserList />
      </div>
    </div>
  )
}

export default ChatLayout
