import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <Popover.Button className="absolute right-4 top-4 text-txt-300 hover:text-txt-100 transition-colors">
      <X className="h-4 w-4" weight="bold" />
    </Popover.Button>
  )
}