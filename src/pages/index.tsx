import * as React from "react"
const isBrowser = typeof window !== "undefined"
import { PageProps } from "gatsby"

import BaseLayout from "../layouts/baseLayout"
const ChannelLayout = React.lazy(() => import('../layouts/ChannelLayout'))
const ChatLayout = React.lazy(() => import("../layouts/ChatLayout"))

type DataProps = {
  site: {
    buildTime: string
  }
}



const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <BaseLayout>
    {isBrowser && <ChannelLayout />}
    {isBrowser && <ChatLayout />}
  </BaseLayout>
)

export default IndexPage
