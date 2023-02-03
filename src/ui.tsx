import {
  Button,
  Columns,
  Container,
  IconButton,
  Muted,
  render,
  Text,
  Textbox,
  TextboxNumeric,
  VerticalSpace
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { CloseHandler, CreateMathHandler, CreatePlotHandler, CreateIntersectionPointHandler, CreateAngleBetweenLinesHandler, CreateTangentLineToCircleHandler } from './types'

import { FiCrosshair } from 'react-icons/fi';
import { RxAngle } from 'react-icons/rx';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const plot = (equation: string) => `
\\begin{tikzpicture}[scale=1.0544]
  \\small
  \\begin{axis} [
      axis x line=center,
      axis y line=center,
      xlabel={$x$},
      ylabel={$y$},
      samples=240,
      width=${10}cm, 
      height=${10}cm,
      xmin=${-5}, xmax=${5},
      ymin=${-5}, ymax=${5},
      restrict y to domain=${-5}:${5},
      axis equal
    ]
  \\addplot[
      black,
      domain=${-5}:${5},
      semithick
    ]
  {${equation}};
\\end{axis}
\\end{tikzpicture}
`
const Plugin = () => {
  const [equation, setEquation] = useState<string>('\\zeta (s) = \\sum_{n \\mathop = 1}^\\infty \\frac 1 {n^s}')
  const [size, setSize] = useState<number | null>(17)
  const [sizeString, setSizeString] = useState<string>('17')
  const [plotEquation, setPlotEquation] = useState<string>('')

  const handleCreateMathButtonClick = useCallback(
    () => {
      if (equation !== null) {
        emit<CreateMathHandler>('CREATE_MATH', {
          equation,
          size: 17,
        })
      }
    },
    [equation]
  );

  const handleCreatePlotButtonClick = useCallback(
    () => {
      if (plotEquation !== null) {
        emit<CreatePlotHandler>('CREATE_PLOT', {
          equation: plotEquation,
        })
      }
    },
    [plotEquation]
  );

  const handleCloseButtonClick = useCallback(() => {
    emit<CloseHandler>('CLOSE')
  }, []);

  const handleCreateIntersectionPointButtonClick = useCallback(() => {
    emit<CreateIntersectionPointHandler>('CREATE_INTERSECTION_POINT');
  }, []);

  const handleCreateAngleBetweenLinesButtonClick = useCallback(() => {
    emit<CreateAngleBetweenLinesHandler>('CREATE_ANGLE_BETWEEN_LINES');
  }, []);

  const handleCreateTangentLineToCircleButtonClick = useCallback(() => {
    emit<CreateTangentLineToCircleHandler>('CREATE_TANGENT_LINE_TO_CIRCLE');
  }, []);

  return (
    <Container space="medium">
      <VerticalSpace space="large" />
      <Text
        size={24}
      >
        LaTeX Equation
      </Text>
      <VerticalSpace space="large" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: 'white',
        }}
      >
        <img src={`https://tex.s2cms.ru/png/${encodeURI(equation || "\\ ")}`} />
      </div>
      <VerticalSpace space="large" />
      <Text>
        <Muted>Equation</Muted>
      </Text>
      <VerticalSpace space="small" />
      <Textbox
        onValueInput={setEquation}
        value={equation}
        variant="border"
        style={{
          fontFamily: "'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', 'Courier New', monospace",
        }}
      />
      <VerticalSpace space="small" />
      <Text>
        <Muted>Size</Muted>
      </Text>
      <VerticalSpace space="small" />
      <TextboxNumeric
        onNumericValueInput={setSize}
        onValueInput={setSizeString}
        value={sizeString}
        variant="border"
      />
      <VerticalSpace space="extraLarge" />
      <Text>
        Plot
      </Text>
      <VerticalSpace space="large" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: 'white',
        }}
      >
        <img
          src={`https://tex.s2cms.ru/png/${encodeURI(plot(plotEquation || ''))}`}
          style={{
            width: '100%',
          }}
        />
      </div>
      <VerticalSpace space="large" />
      <Text>
        <Muted>Plot Equation</Muted>
      </Text>
      <VerticalSpace space="small" />
      <Textbox
        onValueInput={setPlotEquation}
        value={plotEquation}
        variant="border"
      />
      <VerticalSpace space="extraLarge" />
      <Columns space="extraSmall">
        <Button fullWidth onClick={handleCreateMathButtonClick}>
          Import Equation
        </Button>
        <Button fullWidth onClick={handleCreatePlotButtonClick}>
          Import Plot
        </Button>
        <Button fullWidth onClick={handleCloseButtonClick} secondary>
          Close
        </Button>
      </Columns>
      <VerticalSpace space="large" />
      <Text>
        <Muted>Tools</Muted>
      </Text>
      <VerticalSpace space="small" />
      <IconButton onClick={handleCreateIntersectionPointButtonClick}>
        <FiCrosshair size={16}/>
      </IconButton>
      <IconButton onClick={handleCreateAngleBetweenLinesButtonClick}>
        <RxAngle size={16}/>
      </IconButton>
      <IconButton onClick={handleCreateTangentLineToCircleButtonClick}>
        <AiOutlineLoading3Quarters size={16}/>
      </IconButton>
      <VerticalSpace space="small" />
      <VerticalSpace space="small" />
    </Container>
  )
}

export default render(Plugin)
