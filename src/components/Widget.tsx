import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'

import { WidgetForm } from "./WidgetForm"

export function Widget() {
  return (
    <Popover className="absolute bottom-6 right-6 md:rigth-8 md:bottom-8 flex flex-col items-end">
      <Popover.Panel>
        <img className="w-15 mb-5" src="https://acegif.com/wp-content/gifs/dancing-cat-43.gif" />
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">Feedback</span>
      </Popover.Button>
    </Popover>
  )
}