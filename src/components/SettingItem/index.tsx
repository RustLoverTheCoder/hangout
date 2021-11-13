import * as React from 'react'
import { functions } from 'gatsby/dist/redux/reducers'

interface propsType {
  label: string
  type: string
  value: string
  isSelected: boolean
  onchange?: (p: string) => any
  style?: string
}

const SettingItem = ({
  label,
  value,
  type,
  isSelected = false,
  onchange,
  style = 'default',
}: propsType) => {
  if (type === 'menu') {
    return (
      <div className="px-1.5 py-2.5 text-xs font-semibold leading-4 text-channel-default w-48">
        {label}
      </div>
    )
  } else {
    return (
      <div
        onClick={() => onchange?.(value)}
        className={`py-1.5 px-1.5 mb-0.5 rounded  font-medium leading-5 ${
          style === 'default' ? 'text-interactive-normal' : 'text-danger'
        } w-48 cursor-pointer ${isSelected && 'bg-modifier-selected'} hover:bg-modifier-selected`}
      >
        <span>{label}</span>
      </div>
    )
  }
}

export default SettingItem
