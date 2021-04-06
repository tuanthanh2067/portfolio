import { motion } from "framer-motion";

const Text = ({ path, text }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div variants={item}>
      {path}{" "}
      {text === "_" ? (
        <motion.h5
          style={{ display: "inline-block" }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { repeat: Infinity, duration: 0.5 },
          }}
        >
          {text}
        </motion.h5>
      ) : (
        text
      )}
    </motion.div>
  );
};

export default Text;
