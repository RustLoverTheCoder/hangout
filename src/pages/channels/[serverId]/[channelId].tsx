import * as React from 'react'
import { PageProps } from 'gatsby'
import BaseLayout from '../../../layouts/baseLayout'
import ServerLayout from '../../../layouts/ServerLayout'
import ChatLayout from '../../../layouts/ChatLayout'

const Channel: React.FC<PageProps> = (props) => {
  console.log(props)
  const { serverId, channelId } = props.params
  return (
    <BaseLayout>
      <ServerLayout />
      <ChatLayout />
    </BaseLayout>
  )
}

export default Channel
