import { on, once, showUI } from '@create-figma-plugin/utilities'
import { CloseHandler, CreateAngleBetweenLinesHandler, CreateIntersectionPointHandler, CreateMathHandler, CreatePlotHandler } from './types'
import parseSVGLine from './utils/parseSVGLine';

const parseVectorPath = (vectorPath: VectorPath) => {
  const { data } = vectorPath;
  // parse svg vector path data
  const points = parseSVGLine(data);
  return points;
}

const getIntersectionPoint = (segment1: number[][], segment2: number[][]) => {
  const [x1, y1] = segment1[0];
  const [x2, y2] = segment1[1];
  const [x3, y3] = segment2[0];
  const [x4, y4] = segment2[1];

  const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (denominator === 0) {
    return null;
  }

  const x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominator;
  const y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominator;

  return [x, y];
}

const getAngleWithTwoLines = (segment1: number[][], segment2: number[][]) => {
  const [x1, y1] = segment1[0];
  const [x2, y2] = segment1[1];
  const [x3, y3] = segment2[0];
  const [x4, y4] = segment2[1];

  const angle1 = Math.atan2(y2 - y1, x2 - x1);
  const angle2 = Math.atan2(y4 - y3, x4 - x3);
  return angle1 - angle2;
}

export default () => {
  on<CreateMathHandler>('CREATE_MATH', async ({
    equation,
    size
  }) => {
    const request = await fetch(`https://tex.s2cms.ru/svg/${encodeURI(equation)}`);
    const svg = await request.text();
    const svgNode = figma.createNodeFromSvg(svg);

    const scale = size / 17;
    svgNode.resize(scale * svgNode.width, scale * svgNode.height);

    const children = svgNode.children[0].clone();
    children.x = figma.viewport.center.x;
    children.y = figma.viewport.center.y;

    svgNode.remove();
    figma.currentPage.appendChild(children);
    figma.currentPage.selection = [children];
    figma.viewport.scrollAndZoomIntoView([children]);

  })

  on<CreatePlotHandler>('CREATE_PLOT', async ({
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
    (svgNode as FrameNode).name = equation;

    svgNode.x = figma.viewport.center.x;
    svgNode.y = figma.viewport.center.y;
    
    figma.currentPage.appendChild(svgNode);
    figma.currentPage.selection = [svgNode];
    figma.viewport.scrollAndZoomIntoView([svgNode]);

  })

  once<CloseHandler>('CLOSE', () => {
    figma.closePlugin()
  })

  on<CreateAngleBetweenLinesHandler>('CREATE_ANGLE_BETWEEN_LINES', () => {
    // if it is VectorNode
    if (figma.currentPage.selection[0].type === 'VECTOR' && figma.currentPage.selection[1].type === 'VECTOR') {
      let segments = [];
      for (let i = 0; i < 2; i++) {
        const relativeVectorPath = parseVectorPath((figma.currentPage.selection[i] as VectorNode).vectorPaths[0]);
        const x = figma.currentPage.selection[i].x;
        const y = figma.currentPage.selection[i].y;
        const absoluteVectorPath = relativeVectorPath.map((point) => [point[0] + x, point[1] + y]);
        segments.push(absoluteVectorPath);
      }
      const intersectionPoint = getIntersectionPoint(segments[0], segments[1]);
      const angle = getAngleWithTwoLines(segments[0], segments[1]);
      
      console.log(angle * 180 / Math.PI)
      if (intersectionPoint === null) {
        return;
      }

      // create circle at intersection point
      // const circle = figma.createEllipse();
      // circle.resize(4, 4);
      // circle.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];
      // circle.x = intersectionPoint[0] - 2;
      // circle.y = intersectionPoint[1] - 2;

      const sector1 = figma.createEllipse();
      sector1.resize(10, 10);
      sector1.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 0}];
      sector1.strokes = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];
      sector1.strokeWeight = 0.5;
      sector1.strokeAlign = 'CENTER';
      sector1.x = intersectionPoint[0] - 5;
      sector1.y = intersectionPoint[1] - 5;

      const startingAngle1 = Math.atan2(segments[0][0][1] - intersectionPoint[1], segments[0][0][0] - intersectionPoint[0]);
      const endingAngle1 = Math.atan2(segments[1][1][1] - intersectionPoint[1], segments[1][1][0] - intersectionPoint[0]);

      if (startingAngle1 < endingAngle1) {
        sector1.arcData = {
          startingAngle: startingAngle1,
          endingAngle: endingAngle1,
          innerRadius: 0,
        }
      } else {
        sector1.arcData = {
          startingAngle: endingAngle1,
          endingAngle: startingAngle1,
          innerRadius: 0,
        }
      }
      
      const sector2 = figma.createEllipse();
      sector2.resize(16, 16);
      sector2.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}, opacity: 0}];
      sector2.strokes = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];
      sector2.strokeWeight = 0.5;
      sector2.strokeAlign = 'CENTER';
      sector2.x = intersectionPoint[0] - 8;
      sector2.y = intersectionPoint[1] - 8;

      const startingAngle2 = Math.atan2(segments[1][1][1] - intersectionPoint[1], segments[1][1][0] - intersectionPoint[0]);
      const endingAngle2 = Math.atan2(segments[0][0][1] - intersectionPoint[1], segments[0][0][0] - intersectionPoint[0]) + Math.PI;

      if (startingAngle2 > endingAngle2) {
        sector2.arcData = {
          startingAngle: startingAngle2,
          endingAngle: endingAngle2,
          innerRadius: 0,
        }
      } else {
        sector2.arcData = {
          startingAngle: endingAngle2,
          endingAngle: startingAngle2,
          innerRadius: 0,
        }
      }
    }
  });

  on<CreateIntersectionPointHandler>('CREATE_INTERSECTION_POINT', () => {
    if (figma.currentPage.selection[0].type === 'VECTOR' && figma.currentPage.selection[1].type === 'VECTOR') {
      let segments = [];
      for (let i = 0; i < 2; i++) {
        const relativeVectorPath = parseVectorPath((figma.currentPage.selection[i] as VectorNode).vectorPaths[0]);
        const x = figma.currentPage.selection[i].x;
        const y = figma.currentPage.selection[i].y;
        const absoluteVectorPath = relativeVectorPath.map((point) => [point[0] + x, point[1] + y]);
        segments.push(absoluteVectorPath);
      }
      const intersectionPoint = getIntersectionPoint(segments[0], segments[1]);
      const angle = getAngleWithTwoLines(segments[0], segments[1]);
      
      console.log(angle * 180 / Math.PI)
      if (intersectionPoint === null) {
        return;
      }

      // create circle at intersection point
      const circle = figma.createEllipse();
      circle.resize(4, 4);
      circle.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];
      circle.x = intersectionPoint[0] - 2;
      circle.y = intersectionPoint[1] - 2;
    }
  })

  showUI({
    height: 800,
    width: 320,
    title: 'Fisma',
  })
}
