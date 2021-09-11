import * as React from "react"
import useVirtual from "react-cool-virtual"
import Skeleton from "../Skeleton"


const List = () => {
  const { outerRef, innerRef, items } = useVirtual({
    itemCount: 20
  })

  return (
    <div ref={outerRef} className="absolute top-0 bottom-0 right-0 left-0 z-0 overflow-y-auto overflow-x-hidden pr-0">
      <div ref={innerRef} className="flex flex-col w-full gap-y-1">
        {items.map(({ index, size }) => (
          <Skeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default List
