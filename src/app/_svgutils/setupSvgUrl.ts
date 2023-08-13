export const setupSvgUrl = (svg: string) => {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};
