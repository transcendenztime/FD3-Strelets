var ProductsTable = React.createClass({

  displayName: 'ProductsTable',
  
  propTypes: {
    shopName: React.PropTypes.string,
    tableHeaders: React.PropTypes.object,
    products: React.PropTypes.array,
    deletedRows: React.PropTypes.arrayOf(React.PropTypes.bool),
  },

  getDefaultProps: function() {
    return { shopName: "Мой интернет-магазин" }
  },

  getInitialState: function() {
    return { 
      selectedTableRow: null, //номер выделенной строки
      deletedRows: this.props.deletedRows,
    };
  },

  productMarked: function(id) {
    //console.log('Выбрана строка номер '+id);
    this.setState( {selectedTableRow:id} );
    this.setState( {deletedRows:this.props.deletedRows} );
  },

  deleteRow: function(id) {
    var tmpDeleteRows = this.state.deletedRows;
    tmpDeleteRows[id] = true;
    this.setState({deletedRows:tmpDeleteRows});
    //можно переделать под стрелочную функцию
  },

  render: function() {
    console.log(this.state.deletedRows);
    var tableHeader = React.createElement(TableHeader, {key:0,
      hId:tableHeaders.hId, hName:tableHeaders.hName,
      hCost:tableHeaders.hCost, hPhotoUrl:tableHeaders.hPhotoUrl,
      hCount:tableHeaders.hCount, hControl:tableHeaders.hControl,
    } );

    var allProducts=this.props.products.map( p =>
      React.createElement(Product, {key:p.id, 
        id:p.id, name:p.name, cost:p.cost, photoUrl:p.photoUrl, count:p.count,
        cbMarked:this.productMarked,
        cbDeleteRow:this.deleteRow,
        selectedTableRow:this.state.selectedTableRow,
        isDelete:this.state.deletedRows[p.id],
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