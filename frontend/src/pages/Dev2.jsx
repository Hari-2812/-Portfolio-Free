import { developers } from '../utils/data';
import DeveloperProfile from '../components/DeveloperProfile';

export default function Dev2() {
  return <DeveloperProfile developer={developers[1]} />;
}
