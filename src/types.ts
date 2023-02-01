import { EventHandler } from '@create-figma-plugin/utilities'

export interface CreateMathHandler extends EventHandler {
  name: 'CREATE_MATH'
  handler: ({
    equation,
    size,
  }: {
    equation: string
    size: number
  }) => void
}

export interface CreatePlotHandler extends EventHandler {
  name: 'CREATE_PLOT'
  handler: ({
    equation,
  }: {
    equation: string
  }) => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}
