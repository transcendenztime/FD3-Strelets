import {EventEmitter} from 'events';

let prodEvents=new EventEmitter(); 
// в потоке prodEvents будут все события, связанные с товарами
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями

export {prodEvents};
