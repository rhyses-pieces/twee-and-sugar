import './assets/styles/style.css';
import { setupCounter } from './assets/scripts/counter';

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);