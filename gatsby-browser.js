import './src/styles/global.css'
import * as React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ModalContainer } from 'reoverlay'
import Toast from './src/components/Toast'

const queryClient = new QueryClient()

export const wrapPageElement = ({ element }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {element}
      <ModalContainer />
      <Toast.Toaster />
    </QueryClientProvider>
  )
}
