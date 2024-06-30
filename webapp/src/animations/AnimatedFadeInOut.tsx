import { motion } from "framer-motion";

export function AnimatedFadeInOut(props: React.PropsWithChildren<{}>){
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
                {props.children}
        </motion.div>
    )
}