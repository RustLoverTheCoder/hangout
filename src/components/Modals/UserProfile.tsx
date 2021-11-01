import * as React from 'react'
import { ModalWrapper } from 'reoverlay'
import 'reoverlay/lib/ModalWrapper.css'
import userbanner from '../../images/userbanner.webp'

const UserProfile = () => {
  return (
    <ModalWrapper
      contentContainerClassName="rounded-lg  overflow-hidden bg-primary mx-4 md:mx-0"
      animation="zoom"
    >
      <div className="w-full md:w-150 h-auto">
        <div className="w-full h-auto">
          <img src={userbanner} className="w-full h-60 object-cover object-center" alt="" />
          <div className="mb-5 mt-19 mx-4 font-semibold leading-6 text-xl relative">
            <span className="text-header-primary">pupu</span>
            <span className="text-header-secondary">#9996</span>
          </div>
          <div className="border-b border-modifier-accent pl-5 flex text-white">
            <div className="mr-10 w-auto h-14 flex justify-center items-center">用户信息</div>
            <div className="mr-10 w-auto h-14 flex justify-center items-center">共同的服务器</div>
            <div className="mr-10 w-auto h-14 flex justify-center items-center">共同的好友</div>
          </div>
        </div>
        <div className="w-full h-56" />
      </div>
    </ModalWrapper>
  )
}

export default UserProfile
