import * as React from 'react'
import ChatHeader from '../components/ChatHeader'
import PeopleColumn from '../components/PeopleColumn'
import PlayingColumn from '../components/PlayingColumn'

const PersonalLayout = () => {
  return (
    <div className="flex-1 bg-primary flex flex-col">
      <ChatHeader />
      <div className="flex w-full h-full relative">
        <PeopleColumn />
        <PlayingColumn />
      </div>
    </div>
  )
}

export default PersonalLayout
