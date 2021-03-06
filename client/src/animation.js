export const pageAnimation = {
  hiddenUp: {
    opacity: 0,
    y: -550,
    transition: {
      duration: 0.45,
    },
  },
  hiddenDown: {
    opacity: 0,
    y: 550,
    transition: {
      duration: 0.45,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      when: "beforeChildren",
    },
  },
  exitUp: {
    opacity: 0,
    y: -500,
    transition: {
      duration: 0.45,
    },
  },
  exitDown: {
    opacity: 0,
    y: 500,
    transition: {
      duration: 0.45,
    },
  },
};

export const modalAnimation = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
};
