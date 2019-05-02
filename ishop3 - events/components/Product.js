import React from 'react';
import PropTypes from 'prop-types';
//import DOM from 'react-dom-factories';

import {prodEvents} from './events';

import './Product.css';

class Product extends React.Component {
    
    static propTypes = {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cost: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
      count: PropTypes.string.isRequired,
      //cbMarked: PropTypes.func.isRequired,
      //cbEditProduct: PropTypes.func.isRequired,
      //cbDeleteRow: PropTypes.func.isRequired,
      selectedTableRow: PropTypes.number,
      mode: PropTypes.number.isRequired,
      isAnyProductChanged: PropTypes.bool.isRequired,
    };

    productClicked = (EO) => {
        if(!this.props.isAnyProductChanged)
        {
            //this.props.cbMarked(this.props.id);
            prodEvents.emit('EMarked',this.props.id);
        }
    }

    //редактирование товара
    editProduct = (EO) => {
        //if(!this.props.isAnyProductChanged)
        //{
            //this.props.cbEditProduct(this.props.id);
            prodEvents.emit('EEditProduct',this.props.id);
        //}
        EO.stopPropagation();//прекращаем всплытие
            
    }

    deleteRow = (EO) => {
        if(confirm("Удалить товар?"))
		{
            //this.props.cbDeleteRow(this.props.id);
            prodEvents.emit('EDeleteRow',this.props.id);
            
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
                    <input type="button" value="Редактировать" onClick={this.editProduct} disabled={this.props.isAnyProductChanged} />
                    <input type="button" value="Удалить" onClick={this.deleteRow} disabled={this.props.mode > 1}/>
                </td>
            </tr>
        )
    }
}

export default Product;