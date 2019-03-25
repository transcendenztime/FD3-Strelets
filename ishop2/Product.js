var Product = React.createClass({

    displayName: 'Product',
    
    propTypes: {
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      cost: React.PropTypes.number.isRequired,
      photoUrl: React.PropTypes.string.isRequired,
      count: React.PropTypes.number.isRequired,
      selectedTableRow: React.PropTypes.number, // может быть null, пока ни один ответ не выбран
    },
 
    render: function() {
        return React.DOM.tr(
            this.props.selectedTableRow==this.props.id
                ?{className:'SelectedProd'}
                :{className:'Prod'},
            React.DOM.td({className:'Id'} ,this.props.id),
            React.DOM.td({className:'Name'} ,this.props.name),
            React.DOM.td({className:'Cost'} ,this.props.cost),
            React.DOM.td({className:'ImgTd'} ,
            React.DOM.img({className: 'Img', src:this.props.photoUrl}),
            ),
            React.DOM.td({className:'Count'} ,this.props.count),
        );
    },
    
});