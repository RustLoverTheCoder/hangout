import * as React from "react"
import ChannelHeader from "../components/ChannelHeader"

const ChannelLayout = () => {
  return (
    <div className="w-60 h-full bg-secondary">
      <div className="w-full h-12 shadow flex justify-center items-center">
        <ChannelHeader />
      </div>
    </div>
  )
}

export default ChannelLayout
