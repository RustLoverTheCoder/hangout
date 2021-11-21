import * as React from 'react'
import { ModalWrapper, Reoverlay } from 'reoverlay'
import { CgCloseO } from 'react-icons/cg'
import 'reoverlay/lib/ModalWrapper.css'
import SettingItem from '../SettingItem'
import { ConfirmModal } from './index'
import { navigate } from 'gatsby'
import { Account } from '../Setting'

const UserSettings = () => {
  const [select, setSelect] = React.useState('1')

  const menuList = [
    {
      key: '0',
      type: 'menu',
      label: '用户设置',
      style: 'default',
    },
    {
      key: '1',
      type: 'item',
      label: '我的账号',
      style: 'default',
    },
    {
      key: '2',
      type: 'item',
      label: '用户资料',
      style: 'default',
    },
    {
      key: '3',
      type: 'menu',
      label: 'APP设置',
      style: 'default',
    },
    {
      key: '4',
      type: 'item',
      label: '外观',
      style: 'default',
    },
    {
      key: '6',
      type: 'item',
      label: '登出',
      style: 'danger',
    },
  ]

  return (
    <ModalWrapper contentContainerClassName="w-full h-full overflow-hidden bg-primary">
      <div
        className="w-full h-full flex relative justify-center"
        style={{ backgroundImage: 'linear-gradient(to left,#36393f, #2f3136)' }}
      >
        <div className="container h-full  relative flex">
          <div className="bg-secondary w-2/12 flex flex-col justify-start items-end pr-1.5 py-15">
            {menuList.map((item) => (
              <SettingItem
                key={item.key}
                label={item.label}
                type={item.type}
                isSelected={select === item.key}
                value={item.key}
                onchange={(key) => {
                  if (key === '6') {
                    Reoverlay.showModal(ConfirmModal, {
                      confirmTitle: '登出',
                      confirmText: '您确定要退出登录吗',
                      okText: '登出',
                      okButtonColor: '#ed4245',
                      onConfirm: () => {
                        if (typeof window === 'undefined') {
                          localStorage.removeItem('accessToken')
                          localStorage.removeItem('refreshToken')
                          localStorage.removeItem('expires')
                        }
                        navigate('/login')
                      },
                    })
                  } else {
                    setSelect(key)
                  }
                }}
                style={item.style}
              />
            ))}
          </div>
          <div className="bg-primary flex-1 px-10 pt-15 pb-20">{select === '1' && <Account />}</div>
          <div className="absolute top-4 right-4">
            <CgCloseO
              className="text-4xl text-header-secondary hover:text-header-primary"
              onClick={() => Reoverlay.hideAll()}
            />
          </div>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default UserSettings
