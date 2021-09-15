import * as React from "react"
import { PageProps } from "gatsby"
import { ModalContainer, Reoverlay } from 'reoverlay';

import { DatePickerModal } from '../components/Modals'

import BaseLayout from "../layouts/baseLayout"
import ChannelLayout from '../layouts/ChannelLayout'
import ChatLayout from "../layouts/ChatLayout"
import Seo from '../components/seo'

type DataProps = {
  site: {
    buildTime: string
  }
}



const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  React.useEffect(() => {
    Reoverlay.showModal(DatePickerModal, {
      on: "Are you sure you want to delete this post",
      onConfirm: () => {
        console.log('1')
      }
    })
  }, [])
  return (
    <>
      <Seo title="哔啵" />
      <ModalContainer />
      <BaseLayout>
        <ChannelLayout />
        <ChatLayout />
      </BaseLayout>
    </>
  )
}

export default IndexPage
