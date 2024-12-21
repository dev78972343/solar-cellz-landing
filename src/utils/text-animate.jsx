import { motion } from "motion/react";

export const WordFadeIn = ({ children, delay = 0 }) => {
  if (!children) return null;

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          filter: "blur(1px)",
        },
        animate: {
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
            staggerChildren: 0.25,
            when: "beforeChildren",
            delay: delay,
          },
        },
      }}
      initial="initial"
      animate="animate"
    >
      {children.split(" ")?.map((word, idx) => (
        <motion.span
          variants={{
            initial: {
              opacity: 0,
              filter: "blur(1px)",
            },
            animate: {
              opacity: 1,
              filter: "blur(0px)",
            },
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.049 * idx,
          }}
          key={idx + new Date().toISOString()}
        >
          {word + " "}
        </motion.span>
      ))}
    </motion.div>
  );
};
