import { IMessageData, MessageType } from 'interfaces/hooks/hooks.interfaces'
import { HTMLProps, ReactNode } from 'react'

/* compoents Interfaces */

export interface IMessagesList {
  messages: IMessageData[]
}

export interface IMessageItem {
  text: string
  name: string
  type: MessageType
  isMine: boolean
}

/* UI Interfaces */

export interface IButton extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
}
