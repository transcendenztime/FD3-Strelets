import React from 'react';
import PropTypes from 'prop-types';
//import DOM from 'react-dom-factories';

import './Product.css';

class Product extends React.Component {
    
    static propTypes = {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      photoUrl: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      cbMarked: PropTypes.func.isRequired,
      cbDeleteRow: PropTypes.func.isRequired,
      selectedTableRow: PropTypes.number, 
    };

    productClicked = (EO) => {
        this.props.cbMarked(this.props.id);
    }

    deleteRow = (EO) => {
        if(confirm("Удалить товар?"))
		{
			this.props.cbDeleteRow(this.props.id);
		}
		EO.stopPropagation();//прекращаем всплытие
    }

    render() {
        return (
            <tr className={
                this.props.selectedTableRow==this.props.id
                ?"SelectedProd"
                :"Prod"
            }
            onClick={this.productClicked}
            /*onClick={
                this.props.selectedTableRow==this.props.id
                ?this.productClicked
                :null
            }*/
            >
                <td className="Id">{this.props.id}</td>
                <td className="Name">{this.props.name}</td>
                <td className="Cost">{this.props.cost}</td>
                <td className="ImgTd">
                    <img className="Img" src={this.props.photoUrl}/>
                </td>
                <td className="Count">{this.props.count}</td>
                <td className="Control">
                    <input type="button" value="Удалить" onClick={this.deleteRow} />
                </td>
            </tr>
        )
    }

    /*without JSX*/
    /*render() {
        return DOM.tr(
            this.props.selectedTableRow==this.props.id
                ?{className:'SelectedProd'}
                :{className:'Prod', onClick:this.productClicked},
            DOM.td({className:'Id'} ,this.props.id),
            DOM.td({className:'Name'} ,this.props.name),
            DOM.td({className:'Cost'} ,this.props.cost),
            DOM.td({className:'ImgTd'},
                DOM.img({className: 'Img', src:this.props.photoUrl}),
            ),
            DOM.td({className:'Count'}, this.props.count),
            DOM.td({className:'Control'}, 
                DOM.input({type:'button', value:"Удалить", onClick:this.deleteRow}),),  
        );
    }*/
}

/*react 15*/
/*var Product = React.createClass({

    displayName: 'Product',
    
    propTypes: {
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      cost: React.PropTypes.number.isRequired,
      photoUrl: React.PropTypes.string.isRequired,
      count: React.PropTypes.number.isRequired,
      cbMarked: React.PropTypes.func.isRequired,
      cbDeleteRow: React.PropTypes.func.isRequired,
      selectedTableRow: React.PropTypes.number, // может быть null, пока ни один ответ не выбран
    },
 
    productClicked: function(EO) {
        this.props.cbMarked(this.props.id);
    },

    deleteRow: function(EO) {
        if(confirm("Удалить товар?"))
		{
			this.props.cbDeleteRow(this.props.id);
		}
		EO.stopPropagation();//прекращаем всплытие
    },

    render: function() {
        return React.DOM.tr(
            this.props.selectedTableRow==this.props.id
                ?{className:'SelectedProd'}
                :{className:'Prod', onClick:this.productClicked},
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
    
});*/

export default Product;