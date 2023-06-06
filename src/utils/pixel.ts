/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-call */
declare global {
  interface Window {
    fbq: any;
  }
}

const pixel = {
  pageview: () => {
    window.fbq("track", "PageView");
  },
  event: (name: string, options = {}) => {
    window.fbq("track", name, options);
  },
};

export default pixel;
