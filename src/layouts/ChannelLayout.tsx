import * as React from "react"
import ChannelHeader from "../components/ChannelHeader"
import ChannelUser from "../components/ChannelUser"

const ChannelLayout = () => {
  return (
    <div className="w-60 h-full bg-secondary flex flex-col justify-between">
      <div className="w-full h-12 shadow flex justify-center items-center">
        <ChannelHeader />
      </div>
      <ChannelUser />
    </div>
  )
}

export default ChannelLayout
