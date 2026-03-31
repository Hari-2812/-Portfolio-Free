import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#0b0d13]">
      <motion.div
        className="relative h-24 w-24"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border border-cyan-300/30" />
        <div className="absolute inset-3 rounded-full border border-purple-400/40" />
        <div className="absolute inset-7 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-sm" />
      </motion.div>
    </div>
  );
}
