import { motion } from "framer-motion";

export function AnimatedButton(props: React.PropsWithChildren<{}>){
    return (
        <motion.div
            transition={{ duration: 0 }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 1.05 }}>
                {props.children}
        </motion.div>
    )
}