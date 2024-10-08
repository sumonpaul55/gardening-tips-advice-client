// components/LoadingSpinner.tsx
import { motion } from 'framer-motion';
import { Spinner } from '@nextui-org/react';

const LoadingSpinner = () => {
    return (
        <motion.div
            className="flex justify-center items-center h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Spinner
                size="lg"
                className="text-blue-500"
                aria-label="Loading"
            />
        </motion.div>
    );
};

export default LoadingSpinner;
