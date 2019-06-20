"use strict";

import React from 'react';

import PageProduct from './PageProduct';
import PageCategory from './PageCategory';

class PageController extends React.PureComponent {
             
  render() {
    let param = this.props.match.params.param;
    let param2 = this.props.match.params.param2;

    if(param2 && param2.indexOf('page') > -1){
      return <PageCategory category = {param}  page = {parseInt(param2)} />
    }

    if(param2 && param2.indexOf('page') == -1){
        return <PageProduct prodId = {param2} />
    }

  }

}
 
export default PageController;