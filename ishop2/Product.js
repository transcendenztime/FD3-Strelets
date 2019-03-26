var Product = React.createClass({

    displayName: 'Product',
    
    propTypes: {
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      cost: React.PropTypes.number.isRequired,
      photoUrl: React.PropTypes.string.isRequired,
      count: React.PropTypes.number.isRequired,
      cbMarked: React.PropTypes.func.isRequired,
      cbDeleteRow: React.PropTypes.func,//isRequired???
      selectedTableRow: React.PropTypes.number, // может быть null, пока ни один ответ не выбран
      isDelete: React.PropTypes.bool,
    },
 
    productClicked: function(EO) {
        this.props.cbMarked(this.props.id);
    },

    deleteRow: function(EO) {
        this.props.cbDeleteRow(this.props.id);
    },

    render: function() {
        
        var myClassName = "Prod";
        if(this.props.selectedTableRow==this.props.id) myClassName="SelectedProd";
        if(this.props.isDelete) myClassName="DeletedProd";

        return React.DOM.tr(
            /*this.props.selectedTableRow==this.props.id
                ?{className:'SelectedProd', display: displayRow}
                :{className:'Prod', display: displayRow, onClick:this.productClicked},*///'добавить атрибут display'
            {className:myClassName,onClick:this.productClicked},
            React.DOM.td({className:'Id'} ,this.props.id),
            React.DOM.td({className:'Name'} ,this.props.name),
            React.DOM.td({className:'Cost'} ,this.props.cost),
            React.DOM.td({className:'ImgTd'},
            React.DOM.img({className: 'Img', src:this.props.photoUrl}),
            ),
            React.DOM.td({className:'Count'}, this.props.count),
            React.DOM.td({className:'Control'}, 
                React.DOM.input({type:'button', value:"Удалить", onClick:this.deleteRow}),),
            
        );
    },
    
});