import "remirror/styles/all.css"
import * as React from "react"
const isBrowser = typeof window !== "undefined"
import { PlaceholderExtension } from "remirror/extensions"
import { Remirror, useRemirror } from "@remirror/react"
import { IoAddCircleSharp } from "react-icons/io5"
import { BiHappy, BiSticker, BiGift } from "react-icons/bi"
import { AiOutlineGif } from "react-icons/ai"
import { RiSendPlaneFill } from "react-icons/ri"

const Editor = () => {
  const extensions = React.useCallback(
    () => [new PlaceholderExtension({ placeholder: `Hi!` })],
    []
  )

  const { manager } = useRemirror({
    extensions,
    selection: "end",
    stringHandler: "html",

  })

  return (
    isBrowser && (
      <div
        className="w-full rounded-lg flex items-start"
        style={{ background: "#40444b", minHeight: "44px" }}
      >
        <div className="w-14 h-11 flex justify-center items-center flex-shrink-0">
          <IoAddCircleSharp className="text-2xl text-interactive-normal hover:text-interactive-hover" />
        </div>
        <div className="flex-1 text-interactive-normal py-2.5">
          <Remirror manager={manager} classNames={["outline-none"]} />
        </div>
        <div className="flex flex-shrink-0 h-11">
          <div className="w-11 h-11 flex justify-center items-center md:hidden">
            <RiSendPlaneFill className="text-2xl text-interactive-normal hover:text-interactive-hover" />
          </div>
          <div className="w-11 h-11  hidden md:flex justify-center items-center">
            <BiGift className="text-2xl text-interactive-normal hover:text-interactive-hover" />
          </div>
          <div className="w-11 h-11 hidden md:flex justify-center items-center">
            <AiOutlineGif className="text-2xl text-interactive-normal hover:text-interactive-hover" />
          </div>
          <div className="w-11 h-11 hidden md:flex justify-center items-center">
            <BiSticker className="text-2xl text-interactive-normal hover:text-interactive-hover" />
          </div>
          <div className="w-11 h-11 hidden md:flex justify-center items-center">
            <BiHappy className="text-2xl text-interactive-normal hover:text-interactive-hover" />
          </div>
        </div>
      </div>
    )
  )
}

export default Editor
