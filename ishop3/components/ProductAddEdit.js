import React from 'react';
import PropTypes from 'prop-types';

import './ProductAddEdit.css';

class ProductAddEdit extends React.Component {

    static propTypes = {
        /*header: PropTypes.string.isRequired,*/
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.string.isRequired,
        photoUrl: PropTypes.string.isRequired,
        count: PropTypes.string.isRequired,
        cbSave: PropTypes.func.isRequired,
        cbCancel: PropTypes.func.isRequired,
        //cbProductNotSave: вызовется при изменении товара
        cbProductNotSave: PropTypes.func.isRequired,
        //cbMarked: PropTypes.func.isRequired,
        //cbDeleteRow: PropTypes.func.isRequired,
        //selectedTableRow: PropTypes.number, */
    };

    state = {
        id: this.props.id,
        name: this.props.name,
        cost: this.props.cost,
        photoUrl: this.props.photoUrl,
        count: this.props.count,
        isNameValid: true,
        isCostValid: true,
        isPhotoUrlValid: true,
        isCountValid: true,
    }

    validateName = () => {
        if(this.state.name !== "")
            this.setState( {isNameValid: true});
        else
            this.setState( {isNameValid: false});
    }

    validateCost = () => {
        if(this.state.cost !== "")
            this.setState( {isCostValid: true});
        else
            this.setState( {isCostValid: false});
    }

    validatePhotoUrl = () => {
        if(this.state.photoUrl !== "")
            this.setState( {isPhotoUrlValid: true});
        else
            this.setState( {isPhotoUrlValid: false});
    }

    validateCount = () => {
        if(this.state.count !== "")
            this.setState( {isCountValid: true});
        else
            this.setState( {isCountValid: false});
    }

    editName = (EO) => {
        //сообщаем родительскому компоненту, что у нас в товаре
        //появились несохраненные изменения
        this.props.cbProductNotSave();
        this.setState({name: EO.target.value}, this.validateName);
    }

    editCost = (EO) => {
        //сообщаем родительскому компоненту, что у нас в товаре
        //появились несохраненные изменения
        this.props.cbProductNotSave();
        this.setState({cost: EO.target.value}, this.validateCost);
    }

    editPhotoUrl = (EO) => {
        //сообщаем родительскому компоненту, что у нас в товаре
        //появились несохраненные изменения
        this.props.cbProductNotSave();
        this.setState({photoUrl: EO.target.value}, this.validatePhotoUrl);
    }

    editCount = (EO) => {
        //сообщаем родительскому компоненту, что у нас в товаре
        //появились несохраненные изменения
        this.props.cbProductNotSave();
        this.setState({count: EO.target.value}, this.validateCount);
    }

    save = () => {
        this.props.cbSave(
            this.state.id,
            this.state.name,
            this.state.cost,
            this.state.photoUrl,
            this.state.count
        );
    }

    cancel = () => {
        this.props.cbCancel();
    }

    /*productNotSave = () => {
        this.props.cbProductNotSave();
    }*/

    render() {
        return(
            <div className="ProductAddEdit">
                <div className="PrId">ID: {this.state.id}</div>
                <div className="PrParam">
                    <div className="PrKey">Название</div>
                    <div className="PrVal"><input value={this.state.name} onChange={this.editName}/></div>
                    <div className="PrValid">
                    {
                        (!this.state.isNameValid) &&
                        <span>Заполните поле 'Название'</span>
                    }
                    </div>
                </div>
                <div className="PrParam">
                    <div className="PrKey">Цена</div>
                    <div className="PrVal"><input value={this.state.cost} onChange={this.editCost}/></div>
                    <div className="PrValid">
                    {
                        (!this.state.isCostValid) &&
                        <span>Заполните поле 'Цена'</span>
                    }
                    </div>
                </div>
                <div className="PrParam">
                    <div className="PrKey">Url фото</div>
                    <div className="PrVal"><input value={this.state.photoUrl} onChange={this.editPhotoUrl}/></div>
                    <div className="PrValid">
                    {
                        (!this.state.isPhotoUrlValid) &&
                        <span>Заполните поле 'Url фото'</span>
                    }
                    </div>
                </div>
                <div className="PrParam">
                    <div className="PrKey">Количество</div>
                    <div className="PrVal"><input value={this.state.count} onChange={this.editCount}/></div>
                    <div className="PrValid">
                    {
                        (!this.state.isCountValid) &&
                        <span>Заполните поле 'Количество'</span>
                    }
                    </div>
                </div>
                <input className="SaveButton" type="button" value="Сохранить" onClick={this.save}
                    disabled={
                        !this.state.isNameValid ||
                        !this.state.isCostValid ||
                        !this.state.isPhotoUrlValid ||
                        !this.state.isCountValid
                        }/>
                <input type="button" value="Отмена" onClick={this.cancel}/>
            </div>
            
            /*<table className="ProductView">
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{this.props.id}</td>
                    </tr>
                    <tr>
                        <td>Название:</td>
                        <td>{this.props.name}</td>
                    </tr>
                    <tr>
                        <td>Цена:</td>
                        <td>{this.props.cost}</td>
                    </tr>
                    <tr>
                        <td>Url фото:</td>
                        <td>{this.props.photoUrl}</td>
                    </tr>
                    <tr>
                        <td>Количество:</td>
                        <td>{this.props.count}</td>
                    </tr>
                </tbody>
            </table>*/
        )
    }

}

export default ProductAddEdit;