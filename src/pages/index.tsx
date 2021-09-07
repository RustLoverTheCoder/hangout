import * as React from "react"
import { PageProps } from "gatsby"

import BaseLayout from "../layouts/baseLayout"
import ChannelLayout from '../layouts/ChannelLayout'
import ChatLayout from "../layouts/ChatLayout"

type DataProps = {
  site: {
    buildTime: string
  }
}



const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <BaseLayout>
    <ChannelLayout />
    <ChatLayout />
  </BaseLayout>
)

export default IndexPage
