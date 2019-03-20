var ProductsTable = React.createClass({

    displayName: 'ProductsTable',
  
    render: function() {

      return React.DOM.div( {className:'ProductsTable'}, 
        React.DOM.div( {className:'Test1'}, "Test 1" ),
        React.DOM.div( {className:'Test2'}, "Test 2" ),
      );
    },
  
  });