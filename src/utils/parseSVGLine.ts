/**
 * Parse SVG line to array of points
 * example: M 0 0 L 10 10 L 20 20 -> [[0, 0], [10, 10], [20, 20]]
 */

export default (path: string) => {
  const points = path.split('L').map((point) => {
    const [x, y] = point.split(' ').slice(1);
    return [Number(x), Number(y)];
  });
  return points;
}