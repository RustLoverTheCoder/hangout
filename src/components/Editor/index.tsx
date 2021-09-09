import "remirror/styles/all.css"
import * as React from "react"

const isBrowser = typeof window !== "undefined"
import { PlaceholderExtension, BoldExtension, ItalicExtension, UnderlineExtension } from "remirror/extensions"
import { Remirror, useRemirror } from "@remirror/react"
import { IoAddCircleSharp } from "react-icons/io5"
import { BiHappy, BiSticker, BiGift } from "react-icons/bi"
import { AiOutlineGif } from "react-icons/ai"
import { RiSendPlaneFill } from "react-icons/ri"

const extensions = () => [new BoldExtension(), new ItalicExtension(), new UnderlineExtension()]

const Editor = () => {
  if(!isBrowser) return null
  // const extensions = React.useCallback(
  //   () => [new PlaceholderExtension({ placeholder: "<p>Hi</p>" }), new BoldExtension(), new ItalicExtension(), new UnderlineExtension()],
  //   []
  // )

  const { manager } = useRemirror({
    extensions,
    selection: "end",
    stringHandler: "html",
    content: "<p>Hi <strong>Friend</strong></p>"
  })

  return (
    <div
      className="w-full rounded-lg"
      // style={{ background: "#40444b", minHeight: "44px" }}
    >
      {/*<div className="flex-1 text-interactive-normal py-2.5 bg-white">*/}
      {/*</div>*/}
      <Remirror manager={manager} />

      {/*<div className="w-14 h-11 flex justify-center items-center flex-shrink-0">*/}
      {/*  <IoAddCircleSharp className="text-2xl text-interactive-normal hover:text-interactive-hover" />*/}
      {/*</div>*/}
      {/*<div className="flex-1 text-interactive-normal py-2.5">*/}
      {/*  <Remirror manager={manager} classNames={["outline-none"]} />*/}
      {/*</div>*/}
      {/*<div className="flex flex-shrink-0 h-11">*/}
      {/*  <div className="w-11 h-11 flex justify-center items-center md:hidden">*/}
      {/*    <RiSendPlaneFill className="text-2xl text-interactive-normal hover:text-interactive-hover" />*/}
      {/*  </div>*/}
      {/*  <div className="w-11 h-11  hidden md:flex justify-center items-center">*/}
      {/*    <BiGift className="text-2xl text-interactive-normal hover:text-interactive-hover" />*/}
      {/*  </div>*/}
      {/*  <div className="w-11 h-11 hidden md:flex justify-center items-center">*/}
      {/*    <AiOutlineGif className="text-2xl text-interactive-normal hover:text-interactive-hover" />*/}
      {/*  </div>*/}
      {/*  <div className="w-11 h-11 hidden md:flex justify-center items-center">*/}
      {/*    <BiSticker className="text-2xl text-interactive-normal hover:text-interactive-hover" />*/}
      {/*  </div>*/}
      {/*  <div className="w-11 h-11 hidden md:flex justify-center items-center">*/}
      {/*    <BiHappy className="text-2xl text-interactive-normal hover:text-interactive-hover" />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default Editor
