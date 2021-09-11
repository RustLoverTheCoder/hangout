import * as React from "react"
import useVirtual from "react-cool-virtual"
import Skeleton from "../Skeleton"
import ImageSkeleton from "../Skeleton/ImageSkeleton"


const List = () => {
  const { outerRef, innerRef, items } = useVirtual({
    itemCount: 50
  })

  return (
    <div ref={outerRef} className="absolute top-0 bottom-0 right-0 left-0 z-0 overflow-y-auto overflow-x-hidden pr-0">
      <div ref={innerRef} className="flex flex-col w-full gap-y-1">
        {items.map(({ index, size }) => {
          if (index % 3 === 0) {
            return (
              <Skeleton key={index} name="long" />
            )
          }
          if (index % 2 === 0) {
            return (
              <ImageSkeleton key={index} />
            )
          }
          return (
            <Skeleton key={index} name="normal" />
          )
        })}
      </div>
    </div>
  )
}

export default List
