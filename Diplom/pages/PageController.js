"use strict";

import React from 'react';

import PageCategory from './PageCategory';
import PageCatalogue from './PageCatalogue';

class PageController extends React.PureComponent {
             
  render() {
    
    let param = this.props.match.params.param;
    
    if(param && param.indexOf('page') == -1)
      return <PageCategory category = {param} />
       

    if(param && param.indexOf('page') > -1){
      return <PageCatalogue page = {parseInt(param)}/>       
     }
    

  }

}
export default PageController;