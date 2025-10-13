'use client'

import { motion } from 'framer-motion'
import React from 'react'

type AnimatedContainerProps = React.ComponentProps<typeof motion.div> & {
    children: React.ReactNode
}

export default function AnimatedContainer({ children, className, ...rest }: AnimatedContainerProps) {
    return (
        <motion.div
            className={className}
            {...rest}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    )
}


