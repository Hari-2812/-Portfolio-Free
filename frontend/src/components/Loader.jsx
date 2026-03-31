import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950">
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-cyan-300 border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      />
    </div>
  );
}
