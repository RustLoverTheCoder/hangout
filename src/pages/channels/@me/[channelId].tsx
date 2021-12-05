import * as React from 'react'
import { navigate, PageProps } from 'gatsby'
import BaseLayout from '../../../layouts/baseLayout'
import ChannelLayout from '../../../layouts/ChannelLayout'
import PersonalLayout from '../../../layouts/PersonalLayout'

const Channel: React.FC<PageProps> = (props) => {
  const { channelId } = props.params
  return (
    <BaseLayout>
      <ChannelLayout />
      <PersonalLayout />
    </BaseLayout>
  )
}

export default Channel
