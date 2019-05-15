import {EventEmitter} from 'events';

let mobileEvents=new EventEmitter(); 
// в потоке mobileEvents будут все события, связанные с товарами
// лучше работать не с текстовыми литералами, а объявить переменные с соответствующими значениями

export {mobileEvents};
