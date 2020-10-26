const BREAK_POINTS = {
  MOBILE: 559
};

const isMobile = () => {
  const w = window.innerWidth;
  return w <= BREAK_POINTS.MOBILE;
};

export { isMobile };
