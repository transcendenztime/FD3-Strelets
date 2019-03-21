var ProductsTable = React.createClass({

  displayName: 'ProductsTable',
  
  propTypes: {
    shopName: React.PropTypes.string,
    products: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return { shopName: "Мой интернет-магазин" }
  },

  render: function() {
    /*
    id
    name
    cost
    photoUrl
    count
    */
    var allProducts = [];
    /*сначала добавим в таблицу тэг <th> */
    var header =
      React.DOM.tr({key:0,className:'ProdHeader'},
        React.DOM.th(null ,'id'),
        React.DOM.th(null ,'name'),
        React.DOM.th(null ,'cost'),
        React.DOM.th(null ,'photo'),
        React.DOM.th(null ,'count'),
      );
    allProducts.push(header);
    /*добавим в таблицу все элементы массива */
    this.props.products.forEach(function(product, i, products) {
      var oneProduct = 
        React.DOM.tr({key:product.id,className:'Prod'},
          React.DOM.td(null ,product.id),
          React.DOM.td(null ,product.name),
          React.DOM.td(null ,product.cost),
          React.DOM.td(null ,product.photoUrl),
          React.DOM.td(null ,product.count),
        );
      allProducts.push(oneProduct);
    }
    );
    
    return React.DOM.div( {className:'MainDiv'}, 
      //React.DOM.div( {className:'MainDiv'},
      React.DOM.h2( {className:'ShopName'}, this.props.shopName),/* ),*/
        /*React.DOM.div( {className:'Test1'},
        React.DOM.span( null, "Test span 1" ),
        React.DOM.span( {className:'TestSpan2'}, "Test span 2" ), ),*/
      React.DOM.div( {className:'InfoDiv'}, "Таблица со списком товаров:" ),
      React.DOM.table( {className:'ProductsTableOne'}, allProducts ),
    );
  },
  
});