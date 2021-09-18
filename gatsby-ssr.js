import "./src/styles/global.css"
import * as React from "react"
import { QueryClientProvider, QueryClient } from "react-query"

const queryClient = new QueryClient()

export const wrapPageElement = ( { element } ) => {
  return (
    <QueryClientProvider client={queryClient}>
      {element}
    </QueryClientProvider>
  )
}