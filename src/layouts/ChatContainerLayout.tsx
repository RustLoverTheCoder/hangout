import * as React from "react"
import Editor from "../components/Editor"
import { MarkdownEditor } from '@remirror/react-editors/markdown';

interface PropsTypes {
  children?: React.ReactElement | Array<React.ReactElement>
}

const ChatContainerLayout = ({ children }: PropsTypes) => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div>
        {children}
        <div className="w-full px-4 mb-6">
          <MarkdownEditor placeholder='Hi!' />
        </div>
      </div>
      <div className="w-full px-4 mb-6">
        <Editor />
      </div>
    </div>
  )
}

export default ChatContainerLayout
