export const resizeWindow = (width: number, height: number): void => {
  Object.assign(window, { innerWidth: width });
  Object.assign(window, { innerHeight: height });
  window.dispatchEvent(new Event("resize"));
};
