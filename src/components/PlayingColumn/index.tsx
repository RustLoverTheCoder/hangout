import * as React from 'react'

const PlayingColumn = () => {
  return (
    <div className="w-90 h-full p-4 border-l border-modifier-accent">
      <h3 className="mt-2 mb-4 font-bold text-header-primary text-xl">当前活动</h3>
      <div className="p-4 rounded-lg flex flex-col justify-center items-center">
        <h5 className="mb-1 text-header-primary font-semibold text-base">现在很安静......</h5>
        <div className="text-interactive-normal text-sm leading-5 text-center">
          当好友开始活动时（比如玩游戏或进行语音聊天的时候），他们的状态都会显示在这里！
        </div>
      </div>
    </div>
  )
}

export default PlayingColumn
