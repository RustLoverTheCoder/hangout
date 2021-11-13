import * as React from 'react'
import { ModalWrapper, Reoverlay } from 'reoverlay'
import 'reoverlay/lib/ModalWrapper.css'

const ConfirmModal = ({
  confirmTitle,
  confirmText,
  onConfirm,
  okText = '确认',
  cancelText = '取消',
  okButtonColor = '',
}) => {
  const closeModal = () => {
    Reoverlay.hideModal()
  }
  return (
    <ModalWrapper animation="zoom" contentContainerClassName="bg-transparent">
      <div
        className="w-110 h-auto bg-primary flex flex-col rounded-md"
        style={{
          maxHeight: 720,
          minHeight: 200,
        }}
      >
        <div className="p-4 font-semibold text-2xl text-header-primary">{confirmTitle}</div>
        <div className="px-4 pb-5 overflow-y-auto leading-5 text-interactive-normal flex-1">
          {confirmText}
        </div>
        <div className="flex justify-end items-center p-4">
          <button
            onClick={closeModal}
            className="w-24 h-9 text-header-primary text-sm font-semibold"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="w-24 h-9 rounded text-header-primary text-sm font-semibold"
            style={{ backgroundColor: okButtonColor || '#5865f2' }}
          >
            {okText}
          </button>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default ConfirmModal
