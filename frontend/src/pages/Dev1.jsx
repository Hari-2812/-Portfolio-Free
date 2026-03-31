import { developers } from '../utils/data';
import DeveloperProfile from '../components/DeveloperProfile';

export default function Dev1() {
  return <DeveloperProfile developer={developers[0]} />;
}
