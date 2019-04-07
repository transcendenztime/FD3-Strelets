import React from 'react';
import PropTypes from 'prop-types';
//import DOM from 'react-dom-factories';

import './ProductsTable.css';

import TableHeader from './TableHeader';
import Product from './Product';

class ProductsTable extends React.Component {

  static propTypes = {
    shopName: PropTypes.string,
    tableHeaders: PropTypes.object,
    products: PropTypes.array,
  }

  /*getDefaultProps: function() {
    return { shopName: "Мой интернет-магазин",};
  },*/

  state = {
    selectedTableRow: null, //номер выделенной строки
    productsState: this.props.products,
  }

  productMarked = (id) => {
    this.setState( {selectedTableRow:id} );
  }

  deleteRow = (id) => {
    var tmpPoductsState = this.state.productsState;
    //найдем индекс удаляемого элемента,
    //так как он не соответствует "id", который пришел из callback'а
    var deleteIndex = tmpPoductsState.findIndex(x => x.id === id);
    tmpPoductsState.splice(deleteIndex, 1);//удалим элемент (товар) из массива
    //изменим state, что вызовет перерисовку компонента
    this.setState( {productsState:tmpPoductsState} );
  }

  render() {

    var tableHeader = 
    <TableHeader key={0}
      hId={this.props.tableHeaders.hId} hName={this.props.tableHeaders.hName}
      hCost={this.props.tableHeaders.hCost} hPhotoUrl={this.props.tableHeaders.hPhotoUrl}
      hCount={this.props.tableHeaders.hCount} hControl={this.props.tableHeaders.hControl}
    />;

    var allProducts = this.state.productsState.map( p =>
      <Product key={p.id} 
        id={p.id} name={p.name} cost={p.cost} photoUrl={p.photoUrl} count={p.count}
        cbMarked={this.productMarked}
        cbDeleteRow={this.deleteRow}
        selectedTableRow={this.state.selectedTableRow}
      />
    );

    return (
      <div className="ProductsTable">
        <h1 className="ShopName">{this.props.shopName}</h1>
        <h2 className="InfoDiv">Таблица со списком товаров:</h2>
        <table className="ProductsTableOne">
            <thead>{tableHeader}</thead>
            <tbody>{allProducts}</tbody>
        </table>
      </div>
    )

  }

  /*without JSX*/
  /*render() {

    var tableHeader = React.createElement(TableHeader, {key:0,
      hId:this.props.tableHeaders.hId, hName:this.props.tableHeaders.hName,
      hCost:this.props.tableHeaders.hCost, hPhotoUrl:this.props.tableHeaders.hPhotoUrl,
      hCount:this.props.tableHeaders.hCount, hControl:this.props.tableHeaders.hControl,
    } );

    //в качестве props для компонента "Product"
    //передаем "this.state.productsState", где хранится массив с товарами
    var allProducts = this.state.productsState.map( p =>
      React.createElement(Product, {key:p.id, 
        id:p.id, name:p.name, cost:p.cost, photoUrl:p.photoUrl, count:p.count,
        cbMarked:this.productMarked,
        cbDeleteRow:this.deleteRow,
        selectedTableRow:this.state.selectedTableRow,
      })
    );

    return DOM.div( {className:'ProductsTable'}, 
      DOM.h1( {className:'ShopName'}, this.props.shopName),
      DOM.h2( {className:'InfoDiv'}, "Таблица со списком товаров:" ),
      DOM.table( {className:'ProductsTableOne'}, 
        DOM.thead( null, tableHeader ),
        DOM.tbody( null, allProducts ), 
      ),
    );

  }*/

}

/*react 15*/
/*
var ProductsTable = React.createClass({

  displayName: 'ProductsTable',
  
  propTypes: {
    shopName: React.PropTypes.string,
    tableHeaders: React.PropTypes.object,
    products: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return { shopName: "Мой интернет-магазин",};
  },

  getInitialState: function() {
    return { 
      selectedTableRow: null, //номер выделенной строки
      productsState: this.props.products,
    };
  },

  productMarked: function(id) {
    this.setState( {selectedTableRow:id} );
  },

  deleteRow: function(id) {
    var tmpPoductsState = this.state.productsState;
    //найдем индекс удаляемого элемента,
    //так как он не соответствует "id", который пришел из callback'а
    var deleteIndex = tmpPoductsState.findIndex(x => x.id === id);
    tmpPoductsState.splice(deleteIndex, 1);//удалим элемент (товар) из массива
    //изменим state, что вызовет перерисовку компонента
    this.setState( {productsState:tmpPoductsState} );
  },

  render: function() {
    //console.log(this.state.deletedRows);
    //console.log(this.props.tableHeaders);

    var tableHeader = React.createElement(TableHeader, {key:0,
      hId:this.props.tableHeaders.hId, hName:this.props.tableHeaders.hName,
      hCost:this.props.tableHeaders.hCost, hPhotoUrl:this.props.tableHeaders.hPhotoUrl,
      hCount:this.props.tableHeaders.hCount, hControl:this.props.tableHeaders.hControl,
    } );

    //в качестве props для компонента "Product"
    //передаем "this.state.productsState", где хранится массив с товарами
    var allProducts=this.state.productsState.map( p =>
      React.createElement(Product, {key:p.id, 
        id:p.id, name:p.name, cost:p.cost, photoUrl:p.photoUrl, count:p.count,
        cbMarked:this.productMarked,
        cbDeleteRow:this.deleteRow,
        selectedTableRow:this.state.selectedTableRow,
      })
    );

    return React.DOM.div( {className:'ProductsTable'}, 
      React.DOM.h1( {className:'ShopName'}, this.props.shopName),
      React.DOM.h2( {className:'InfoDiv'}, "Таблица со списком товаров:" ),
      React.DOM.table( {className:'ProductsTableOne'}, 
        React.DOM.thead( null, tableHeader ),
        React.DOM.tbody( null, allProducts ), 
      ),
    );
  },
  
});*/

export default ProductsTable;