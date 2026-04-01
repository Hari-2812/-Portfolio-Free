import { developers } from '../utils/data';
import DeveloperProfile from '../components/DeveloperProfile';

export default function Dev2() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-purple-500/15 to-transparent" />
      <DeveloperProfile developer={developers[1]} />
    </div>
  );
}
