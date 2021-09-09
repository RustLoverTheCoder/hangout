import "remirror/styles/all.css"
import * as React from "react"

const isBrowser = typeof window !== "undefined"
import { PlaceholderExtension, BoldExtension, ItalicExtension, UnderlineExtension } from "remirror/extensions"
import { Remirror, useRemirror } from "@remirror/react"
import { IoAddCircleSharp } from "react-icons/io5"
import { BiHappy, BiSticker, BiGift } from "react-icons/bi"
import { AiOutlineGif } from "react-icons/ai"
import { RiSendPlaneFill } from "react-icons/ri"

const extensions = () => [new BoldExtension(), new ItalicExtension(), new UnderlineExtension(), new PlaceholderExtension({ placeholder: "hi" })]

const Editor = () => {
  if (!isBrowser) return null

  const { manager, state, onChange } = useRemirror({
    extensions,
    selection: "end",
    stringHandler: "html"
  })

  return (
    <div
      className="w-full rounded-lg flex items-start"
      style={{ background: "#40444b", minHeight: "44px" }}
    >
      <div className="w-14 h-11 flex justify-center items-center flex-shrink-0">
        <IoAddCircleSharp className="text-2xl text-interactive-normal hover:text-interactive-hover" />
      </div>
      <div className="flex-1 text-interactive-normal py-2.5">
        <Remirror manager={manager} state={state} onChange={onChange} placeholder={"hi"}
                  classNames={["outline-none"]} />
      </div>
      <div className="flex flex-shrink-0 h-11">
        <div className="w-11 h-11 flex justify-center items-center sm:hidden">
          <RiSendPlaneFill className="text-2xl text-interactive-normal hover:text-interactive-hover" />
        </div>
        <div className="w-11 h-11  hidden sm:flex justify-center items-center">
          <BiGift className="text-2xl text-interactive-normal hover:text-interactive-hover" />
        </div>
        <div className="w-11 h-11 hidden sm:flex justify-center items-center">
          <AiOutlineGif className="text-2xl text-interactive-normal hover:text-interactive-hover" />
        </div>
        <div className="w-11 h-11 hidden sm:flex justify-center items-center">
          <BiSticker className="text-2xl text-interactive-normal hover:text-interactive-hover" />
        </div>
        <div className="w-11 h-11 hidden sm:flex justify-center items-center">
          <BiHappy className="text-2xl text-interactive-normal hover:text-interactive-hover" />
        </div>
      </div>
    </div>
  )
}

export default Editor
