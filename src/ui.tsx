import {
  Button,
  Columns,
  Container,
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

import { CloseHandler, CreateMathHandler, CreatePlotHandler } from './types'

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
  }, [])
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
      <VerticalSpace space="small" />
    </Container>
  )
}

export default render(Plugin)
