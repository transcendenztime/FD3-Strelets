import React from 'react';
import PropTypes from 'prop-types';
//import DOM from 'react-dom-factories';

import './ProductsTable.css';

import TableHeader from './TableHeader';
import Product from './Product';
import ProductView from './ProductView';

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
    productsState: this.props.products, //массив с товарами
    productToView: null, //тут храним хеш с элементами просматриваемого товара
  }

  productMarked = (id) => {
    this.setState( {selectedTableRow:id} );
    //получаем данные товара для просмотра
    let productToViewIndex = this.state.productsState.findIndex(x => x.id === id);
    this.setState( {productToView: this.state.productsState[productToViewIndex]} );
  }

  deleteRow = (id) => {
    let tmpPoductsState = this.state.productsState;
    //найдем индекс удаляемого элемента,
    //так как он не соответствует "id", который пришел из callback'а
    let deleteIndex = tmpPoductsState.findIndex(x => x.id === id);
    tmpPoductsState.splice(deleteIndex, 1);//удалим элемент (товар) из массива
    this.setState( {productsState:tmpPoductsState} );
    //если удаляется выбранный для товар, нужно закрыть его карточку карточку
    //обнуляем state, где хранится номер товара для просмотра
    //компонент перерисуется без карточки товара
    if(id === this.state.selectedTableRow)
    {
      this.setState( {productToView: null} );
    }
  }

  render() {

    let tableHeader = 
    <TableHeader key={0}
      hId={this.props.tableHeaders.hId} hName={this.props.tableHeaders.hName}
      hCost={this.props.tableHeaders.hCost} hPhotoUrl={this.props.tableHeaders.hPhotoUrl}
      hCount={this.props.tableHeaders.hCount} hControl={this.props.tableHeaders.hControl}
    />;

    let allProducts = this.state.productsState.map( p =>
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
        <div className="ProductsMainDiv">
          <div className="ProductsTableLeft">
            <table className="ProductsTableOne">
              <thead>{tableHeader}</thead>
              <tbody>{allProducts}</tbody>
            </table>
          </div>
          { (this.state.productToView) &&
            <div className="ProductsTableRight">
              <h2>Просмотр товара: {this.state.productToView.name}</h2>
              <ProductView key={this.state.productToView.id}
              id={this.state.productToView.id} name={this.state.productToView.name}
              cost={this.state.productToView.cost} photoUrl={this.state.productToView.photoUrl}
              count={this.state.productToView.count} />
            </div>
          }
        </div>
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