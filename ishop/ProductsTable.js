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
    var allProducts = [];
    /*сначала добавим в таблицу тэг <th> */
    var header =
      React.DOM.tr({key:0,className:'ProdHeader'},
        React.DOM.th({className:'HId'} ,'id'),
        React.DOM.th({className:'HName'} ,'Название'),
        React.DOM.th({className:'HCost'} ,'Цена'),
        React.DOM.th({className:'HPhoto'} ,'Фото'),
        React.DOM.th({className:'HCount'} ,'Количество'),
      );
    allProducts.push(header);
    /*добавим в таблицу все элементы массива */
    this.props.products.forEach(function(product) {
      var oneProduct = 
        React.DOM.tr({key:product.id,className:'Prod'},
          React.DOM.td({className:'Id'} ,product.id),
          React.DOM.td({className:'Name'} ,product.name),
          React.DOM.td({className:'Cost'} ,product.cost),
          React.DOM.td({className:'ImgTd'} ,
            React.DOM.img({className: 'Img', src:product.photoUrl}),),
          React.DOM.td({className:'Count'} ,product.count),
        );
      allProducts.push(oneProduct);
    }
    );
    
    return React.DOM.div( {className:'ProductsTable'}, 
      React.DOM.h1( {className:'ShopName'}, this.props.shopName),
      React.DOM.h2( {className:'InfoDiv'}, "Таблица со списком товаров:" ),
      React.DOM.table( {className:'ProductsTableOne'}, allProducts ),
    );
  },
  
});