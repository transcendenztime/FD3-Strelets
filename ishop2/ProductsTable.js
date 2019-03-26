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
    var tableHeader = React.createElement(TableHeader, {key:0,
      hId:tableHeaders.hId, hName:tableHeaders.hName,
      hCost:tableHeaders.hCost, hPhotoUrl:tableHeaders.hPhotoUrl,
      hCount:tableHeaders.hCount, hControl:tableHeaders.hControl,
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
  
});