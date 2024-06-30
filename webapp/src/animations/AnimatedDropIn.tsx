import { AnimatePresence, motion } from "framer-motion";

const dropIn = {
    hidden: {
      y: '-100vh', opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      }
    },
    exit: {
      y: '100vh', 
      opacity: 0
    },
  }

export function AnimatedDropIn(props: React.PropsWithChildren<{}>){
    return (
        <motion.div
        onClick={e => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}
            >
                {props.children}
            </AnimatePresence>
        </motion.div>
    )
}