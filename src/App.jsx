import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./App.css";

const boxVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Box = ({ num }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariants}
      initial="hidden"
      animate={control}
    >
      <h1>{num}</h1>
    </motion.div>
  );
};

function App() {
  return (
    <div className="App">
      <section>
        <Box num={1} />
      </section>
      <section>
        <Box num={2} />
      </section>
      <section>
        <Box num={3} />
      </section>
    </div>
  );
}

export default App;
