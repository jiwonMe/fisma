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

export interface CreateAngleBetweenLinesHandler extends EventHandler {
  name: 'CREATE_ANGLE_BETWEEN_LINES'
  handler: () => void
}

export interface CreateIntersectionPointHandler extends EventHandler {
  name: 'CREATE_INTERSECTION_POINT'
  handler: () => void
}

export interface CreateTangentLineToCircleHandler extends EventHandler {
  name: 'CREATE_TANGENT_LINE_TO_CIRCLE'
  handler: () => void
}