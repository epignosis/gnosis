export const resizeWindow = (x: number, y: number): void => {
  Object.assign(window, { innerWidth: x });
  Object.assign(window, { innerHeight: y });
  window.dispatchEvent(new Event("resize"));
};
