import * as React from "react"
import { useActive, useCommands } from "@remirror/react"

const Menu = () => {
  // Access the commands and the activity status of the editor.
  const commands = useCommands()
  // Whether bold/italic etc is active at the current selection.
  const active = useActive()

  return (
    <div>
      <button
        onClick={() => commands.toggleBold()}
        style={{ fontWeight: active.bold() ? "bold" : undefined }}
      >
        B
      </button>
      <button
        onClick={() => commands.toggleItalic()}
        style={{ fontWeight: active.italic() ? "bold" : undefined }}
      >
        I
      </button>
      <button
        onClick={() => commands.toggleUnderline()}
        style={{ fontWeight: active.underline() ? "bold" : undefined }}
      >
        U
      </button>
    </div>
  )
}
export default Menu
