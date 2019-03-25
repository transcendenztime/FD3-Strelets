var ProductsTable = React.createClass({

  displayName: 'ProductsTable',
  
  propTypes: {
    shopName: React.PropTypes.string,
    tableHeaders: React.PropTypes.object,
    products: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return { shopName: "Мой интернет-магазин" }
  },

  render: function() {
    var tableHeader = React.createElement(TableHeader, {key:0, hId:tableHeaders.hId, hName:tableHeaders.hName, hCost:tableHeaders.hCost, hPhotoUrl:tableHeaders.hPhotoUrl, hCount:tableHeaders.hCount} );

    var allProducts=this.props.products.map( p =>
      React.createElement(Product, {key:p.id, id:p.id, name:p.name, cost:p.cost, photoUrl:p.photoUrl, count:p.count} )
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