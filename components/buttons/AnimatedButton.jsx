import Link from "next/link";
import { motion } from "framer-motion";

const AnimatedButton = () => (
  <Link href="/blogs">
    <motion.button
      animate={{ rotate: 0, scale: 1 }}
      className="font-bold text-white dark:bg-[#0ab0c2] py-2 px-6 rounded  dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]"
      initial={{ rotate: 180, scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      Explore All Blogs
    </motion.button>
  </Link>
);

export default AnimatedButton;
