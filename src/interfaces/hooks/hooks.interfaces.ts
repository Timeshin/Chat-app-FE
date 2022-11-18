export type MessageType = 'message' | 'action'

export interface IMessage {
  text: string
  userName: string
}

export interface IMessageData {
  id: string
  type: MessageType
  message: IMessage
}
