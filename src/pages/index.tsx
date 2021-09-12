import * as React from "react"
import { PageProps } from "gatsby"

import BaseLayout from "../layouts/baseLayout"
import ChannelLayout from '../layouts/ChannelLayout'
import ChatLayout from "../layouts/ChatLayout"
import Seo from '../components/seo'

type DataProps = {
  site: {
    buildTime: string
  }
}



const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <BaseLayout>
    <Seo title="噗噗" />
    <ChannelLayout />
    <ChatLayout />
  </BaseLayout>
)

export default IndexPage
