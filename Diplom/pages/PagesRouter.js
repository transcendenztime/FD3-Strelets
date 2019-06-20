import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import PageMain from './PageMain';
import PageCatalogue from './PageCatalogue';
import PageWarranty from './PageWarranty';
import PageContacts from './PageContacts';
import PageCart from './PageCart';
import PageController from './PageController';
import PageController2 from './PageController2';
import PagePartnership from './PagePartnership';

class PagesRouter extends React.Component {
          
  render() {

    return (
      <div>
        <Route path="/" exact component={PageMain} />
        <Route path="/catalogue" exact component={PageCatalogue} />
        <Route path="/catalogue/:param" exact component={PageController} />
        <Route path="/catalogue/:param/:param2" exact component={PageController2} />
        <Route path="/warranty" component={PageWarranty} />
        <Route path="/partnership" component={PagePartnership} />
        <Route path="/contacts" component={PageContacts} />
        <Route path="/cart" component={PageCart} />
      </div>
    );
    
  }

}
    
export default PagesRouter;
    