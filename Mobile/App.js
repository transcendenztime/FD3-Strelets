"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
//разделить fio
let clientsArr=[ 
  {id:101, clientF:"Иванов", clientI:"Иван", clientO:"Иванович", balance:200}, 
  {id:105, clientF:"Сидоров", clientI:"Сидор", clientO:"Сидорович", balance:250}, 
  {id:110, clientF:"Петров", clientI:"Петр", clientO:"Петрович", balance:180},
  {id:120, clientF:"Григорьев", clientI:"Григорий", clientO:"Григорьевич", balance:-220},
];

ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
  />
  , document.getElementById('MainContainer') 
);

/*ReactDOM.render(
  <MobileCompany/>, document.getElementById('MainContainer') 
);*/