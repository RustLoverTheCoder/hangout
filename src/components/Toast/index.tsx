import toast, { Toaster } from 'react-hot-toast'

const error = (message) =>
  toast.error(message, {
    style: {
      color: '#ffffff',
      backgroundColor: '#ed4245',
      padding: 8,
    },
    iconTheme: {
      primary: '#ffffff',
      secondary: '#ed4245',
    },
  })

const success = (message) =>
  toast.success(message, {
    style: {
      color: '#ffffff',
      backgroundColor: '#36393f',
      padding: 8,
    },
    iconTheme: {
      primary: '#ffffff',
      secondary: '#36393f',
    },
  })

const info = (message) =>
  toast(message, {
    style: {
      color: '#ffffff',
      backgroundColor: '#36393f',
      padding: 8,
    },
    iconTheme: {
      primary: '#ffffff',
      secondary: '#36393f',
    },
  })

export default { error, success, info, Toaster }
