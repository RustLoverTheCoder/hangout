import * as React from 'react'
import { navigate, PageProps } from 'gatsby'
import BaseLayout from '../../../layouts/baseLayout'
import ChannelLayout from '../../../layouts/ChannelLayout'
import ChatLayout from '../../../layouts/ChatLayout'

const Channel: React.FC<PageProps> = (props) => {
  console.log(props)
  const { serverId, channelId } = props.params
  return (
    <BaseLayout>
      <ChannelLayout />
      <ChatLayout />
    </BaseLayout>
  )
}

export default Channel
