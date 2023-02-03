(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function once(name, handler) {
    let done = false;
    return on(name, function(...args) {
      if (done === true) {
        return;
      }
      done = true;
      handler(...args);
    });
  }
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, currentId;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/ui.js
  function showUI(options, data) {
    if (typeof __html__ === "undefined") {
      throw new Error("No UI defined");
    }
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}<\/script>`;
    figma.showUI(html, __spreadProps(__spreadValues({}, options), {
      themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
    }));
  }
  var init_ui = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_ui();
    }
  });

  // src/utils/parseSVGLine.ts
  var parseSVGLine_default;
  var init_parseSVGLine = __esm({
    "src/utils/parseSVGLine.ts"() {
      "use strict";
      parseSVGLine_default = (path) => {
        const points = path.split("L").map((point) => {
          const [x, y] = point.split(" ").slice(1);
          return [Number(x), Number(y)];
        });
        return points;
      };
    }
  });

  // src/main.ts
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  var parseVectorPath, getIntersectionPoint, getAngleWithTwoLines, main_default;
  var init_main = __esm({
    "src/main.ts"() {
      "use strict";
      init_lib();
      init_parseSVGLine();
      parseVectorPath = (vectorPath) => {
        const { data } = vectorPath;
        const points = parseSVGLine_default(data);
        return points;
      };
      getIntersectionPoint = (segment1, segment2) => {
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
      };
      getAngleWithTwoLines = (segment1, segment2) => {
        const [x1, y1] = segment1[0];
        const [x2, y2] = segment1[1];
        const [x3, y3] = segment2[0];
        const [x4, y4] = segment2[1];
        const angle1 = Math.atan2(y2 - y1, x2 - x1);
        const angle2 = Math.atan2(y4 - y3, x4 - x3);
        return angle1 - angle2;
      };
      main_default = () => {
        on("CREATE_MATH", async ({
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
        });
        on("CREATE_PLOT", async ({
          equation
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
    `);
          const request = await fetch(`https://tex.s2cms.ru/svg/${encodedPlotTeX}`);
          const svg = await request.text();
          const svgNode = figma.createNodeFromSvg(svg);
          svgNode.name = equation;
          svgNode.x = figma.viewport.center.x;
          svgNode.y = figma.viewport.center.y;
          figma.currentPage.appendChild(svgNode);
          figma.currentPage.selection = [svgNode];
          figma.viewport.scrollAndZoomIntoView([svgNode]);
        });
        once("CLOSE", () => {
          figma.closePlugin();
        });
        on("CREATE_ANGLE_BETWEEN_LINES", () => {
          if (figma.currentPage.selection[0].type === "VECTOR" && figma.currentPage.selection[1].type === "VECTOR") {
            let segments = [];
            for (let i = 0; i < 2; i++) {
              const relativeVectorPath = parseVectorPath(figma.currentPage.selection[i].vectorPaths[0]);
              const x = figma.currentPage.selection[i].x;
              const y = figma.currentPage.selection[i].y;
              const absoluteVectorPath = relativeVectorPath.map((point) => [point[0] + x, point[1] + y]);
              segments.push(absoluteVectorPath);
            }
            const intersectionPoint = getIntersectionPoint(segments[0], segments[1]);
            const angle = getAngleWithTwoLines(segments[0], segments[1]);
            console.log(angle * 180 / Math.PI);
            if (intersectionPoint === null) {
              return;
            }
            const sector1 = figma.createEllipse();
            sector1.resize(10, 10);
            sector1.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, opacity: 0 }];
            sector1.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
            sector1.strokeWeight = 0.5;
            sector1.strokeAlign = "CENTER";
            sector1.x = intersectionPoint[0] - 5;
            sector1.y = intersectionPoint[1] - 5;
            const startingAngle1 = Math.atan2(segments[0][0][1] - intersectionPoint[1], segments[0][0][0] - intersectionPoint[0]);
            const endingAngle1 = Math.atan2(segments[1][1][1] - intersectionPoint[1], segments[1][1][0] - intersectionPoint[0]);
            if (startingAngle1 < endingAngle1) {
              sector1.arcData = {
                startingAngle: startingAngle1,
                endingAngle: endingAngle1,
                innerRadius: 0
              };
            } else {
              sector1.arcData = {
                startingAngle: endingAngle1,
                endingAngle: startingAngle1,
                innerRadius: 0
              };
            }
            const sector2 = figma.createEllipse();
            sector2.resize(16, 16);
            sector2.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 }, opacity: 0 }];
            sector2.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
            sector2.strokeWeight = 0.5;
            sector2.strokeAlign = "CENTER";
            sector2.x = intersectionPoint[0] - 8;
            sector2.y = intersectionPoint[1] - 8;
            const startingAngle2 = Math.atan2(segments[1][1][1] - intersectionPoint[1], segments[1][1][0] - intersectionPoint[0]);
            const endingAngle2 = Math.atan2(segments[0][0][1] - intersectionPoint[1], segments[0][0][0] - intersectionPoint[0]) + Math.PI;
            if (startingAngle2 > endingAngle2) {
              sector2.arcData = {
                startingAngle: startingAngle2,
                endingAngle: endingAngle2,
                innerRadius: 0
              };
            } else {
              sector2.arcData = {
                startingAngle: endingAngle2,
                endingAngle: startingAngle2,
                innerRadius: 0
              };
            }
          }
        });
        on("CREATE_INTERSECTION_POINT", () => {
          if (figma.currentPage.selection[0].type === "VECTOR" && figma.currentPage.selection[1].type === "VECTOR") {
            let segments = [];
            for (let i = 0; i < 2; i++) {
              const relativeVectorPath = parseVectorPath(figma.currentPage.selection[i].vectorPaths[0]);
              const x = figma.currentPage.selection[i].x;
              const y = figma.currentPage.selection[i].y;
              const absoluteVectorPath = relativeVectorPath.map((point) => [point[0] + x, point[1] + y]);
              segments.push(absoluteVectorPath);
            }
            const intersectionPoint = getIntersectionPoint(segments[0], segments[1]);
            const angle = getAngleWithTwoLines(segments[0], segments[1]);
            console.log(angle * 180 / Math.PI);
            if (intersectionPoint === null) {
              return;
            }
            const circle = figma.createEllipse();
            circle.resize(4, 4);
            circle.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
            circle.x = intersectionPoint[0] - 2;
            circle.y = intersectionPoint[1] - 2;
          }
        });
        on("CREATE_TANGENT_LINE_TO_CIRCLE", () => {
          let pointCircle = null;
          let objectCircle = null;
          if (figma.currentPage.selection.length !== 2)
            return;
          let radiusObjCircle = 0;
          figma.currentPage.selection.forEach(
            (node) => {
              if (node.type === "ELLIPSE") {
                const r = node.width / 2;
                if (r > radiusObjCircle) {
                  radiusObjCircle = r;
                  objectCircle = node;
                }
              }
            }
          );
          if (objectCircle === null)
            return;
          figma.currentPage.selection.forEach(
            (node) => {
              if (node.type === "ELLIPSE") {
                if (node !== objectCircle) {
                  pointCircle = node;
                }
              }
            }
          );
          if (pointCircle === null)
            return;
          const centerPointCircle = [pointCircle.x + pointCircle.width / 2, pointCircle.y + pointCircle.height / 2];
          const centerObjectCircle = [objectCircle.x + objectCircle.width / 2, objectCircle.y + objectCircle.height / 2];
          const radiusPointCircle = pointCircle.width / 2;
          const radiusObjectCircle = objectCircle.width / 2;
          const distance = Math.sqrt(Math.pow(centerPointCircle[0] - centerObjectCircle[0], 2) + Math.pow(centerPointCircle[1] - centerObjectCircle[1], 2));
          const angle = Math.atan2(centerPointCircle[1] - centerObjectCircle[1], centerPointCircle[0] - centerObjectCircle[0]);
          const tangentLine1 = figma.createVector();
          const l1 = Math.sqrt(distance * distance - radiusObjectCircle * radiusObjectCircle);
          tangentLine1.vectorPaths = [{
            windingRule: "EVENODD",
            data: `M 0 0 L ${l1} 0`
          }];
          tangentLine1.x = centerPointCircle[0];
          tangentLine1.y = centerPointCircle[1];
          tangentLine1.rotation = -(angle * 180 / Math.PI + Math.asin(radiusObjectCircle / distance) * 180 / Math.PI) + 180;
          tangentLine1.strokeWeight = 1;
          tangentLine1.strokeAlign = "CENTER";
          tangentLine1.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
          const tangentLine2 = figma.createVector();
          const l2 = Math.sqrt(distance * distance - radiusObjectCircle * radiusObjectCircle);
          tangentLine2.vectorPaths = [{
            windingRule: "EVENODD",
            data: `M 0 0 L ${l2} 0`
          }];
          tangentLine2.x = centerPointCircle[0];
          tangentLine2.y = centerPointCircle[1];
          tangentLine2.rotation = -(angle * 180 / Math.PI - Math.asin(radiusObjectCircle / distance) * 180 / Math.PI) + 180;
          tangentLine2.strokeWeight = 1;
          tangentLine2.strokeAlign = "CENTER";
          tangentLine2.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        });
        showUI({
          height: 800,
          width: 320,
          title: "Fisma"
        });
      };
    }
  });

  // <stdin>
  var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
  var commandId = true ? "src/main.ts--default" : figma.command;
  modules[commandId]();
})();
