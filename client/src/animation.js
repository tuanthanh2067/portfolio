export const pageAnimation = {
  hiddenUp: {
    opacity: 0,
    y: -600,
    transition: {
      duration: 0.5,
    },
  },
  hiddenDown: {
    opacity: 0,
    y: 600,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exitUp: {
    opacity: 0,
    y: -600,
    transition: {
      duration: 0.5,
    },
  },
  exitDown: {
    opacity: 0,
    y: 600,
    transition: {
      duration: 0.5,
    },
  },
};
