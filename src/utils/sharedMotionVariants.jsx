// ============== Slide Up Variants ==============
export const slideUpParentVariants = (delay = 0) => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: delay,
      staggerChildren: 0.18,
      when: "beforeChildren",
    },
  },
});

export const slideUpChildVariants = {
  initial: {
    y: 50,
    opacity: 0,
    filter: "blur(1px)",
  },
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      mass: 0.1,
      damping: 40,
      stiffness: 180,
    },
  },
};

export const slideDownVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 30,
      stiffness: 180,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

// ============== Slide Left/Right Variants ==============
export const slideRightParentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.3,
      damping: 30,
      stiffness: 180,
      staggerChildren: 0.1,
      when: "beforeChildren",
      restDelta: 0.1,
    },
  },
};

export const slideRightChildVariants = {
  initial: {
    x: -250,
    filter: "blur(1px)",
  },
  animate: {
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      mass: 0.1,
      damping: 10,
      stiffness: 280,
    },
  },
};
