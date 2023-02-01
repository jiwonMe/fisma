import { once, showUI } from '@create-figma-plugin/utilities'
import { CloseHandler, CreateMathHandler, CreatePlotHandler } from './types'

export default () => {
  once<CreateMathHandler>('CREATE_MATH', async ({
    equation,
    size
  }) => {
    const request = await fetch(`https://tex.s2cms.ru/svg/${encodeURI(equation)}`);
    const svg = await request.text();
    const svgNode = figma.createNodeFromSvg(svg);
    const scale = size / 17;
    svgNode.resize(scale * svgNode.width, scale * svgNode.height);

    figma.currentPage.appendChild(svgNode);
    figma.currentPage.selection = [svgNode];
    figma.viewport.scrollAndZoomIntoView([svgNode]);
    // figma.closePlugin();
  })

  once<CreatePlotHandler>('CREATE_PLOT', async ({
    equation,
  }) => {
    const encodedPlotTeX = encodeURI(`
$$\\begin{tikzpicture}[scale=1.0544]
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
\\end{tikzpicture}$$
    `)
    const request = await fetch(`https://tex.s2cms.ru/svg/${encodedPlotTeX}`);
    const svg = await request.text();
    const svgNode = figma.createNodeFromSvg(svg);
    
    figma.currentPage.appendChild(svgNode);
    figma.currentPage.selection = [svgNode];
    figma.viewport.scrollAndZoomIntoView([svgNode]);
    // figma.closePlugin();
  })

  once<CloseHandler>('CLOSE', function () {
    figma.closePlugin()
  })

  showUI({
    height: 500,
    width: 320,
    title: 'FigTeX',
  })
}
