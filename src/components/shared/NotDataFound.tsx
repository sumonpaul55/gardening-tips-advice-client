import { Card } from "@nextui-org/react";
import { motion } from "framer-motion";
import { MdSearchOff } from "react-icons/md"; // Using a react icon for the empty state

const NoDataFound: React.FC = () => {
    return (
        <motion.div
            className="flex justify-center items-center h-screen"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="p-10 text-center">
                <div className="flex justify-center mb-4">
                    <MdSearchOff className="text-6xl text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-700">
                    No Data Found
                </h3>
            </Card>
        </motion.div>
    );
};

export default NoDataFound;
