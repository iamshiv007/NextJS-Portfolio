import { motion } from "framer-motion";
import Link from "next/link";

const AnimatedButton = () => {
  const styles = {
    borderRadius: 5,
    margin: "auto",
    padding: "10px 20px 10px 20px",
    borderRadius: "10px",
  };

  return (
    <Link href="/blogs">
      <motion.button
        className="font-bold text-white dark:bg-[#0ab0c2]  dark:hover:bg-[#078795] bg-[#f91071] hover:bg-[#c72c6c]"
        style={styles}
        initial={{ rotate: 180, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
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
};

export default AnimatedButton;
