import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

//import './ProductAddEdit.css';

class ClientAddEdit extends React.PureComponent {

    static propTypes = {
        mode: PropTypes.number.isRequired,
        clients:PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
            clientF: PropTypes.string.isRequired,
            clientI: PropTypes.string.isRequired,
            clientO: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
          })
        ),
        clientToEdit: PropTypes.number.isRequired,
    };

    state = {
        //clients: this.props.clients,
        /*id: this.props.id,
        name: this.props.name,
        cost: this.props.cost,
        photoUrl: this.props.photoUrl,
        count: this.props.count,*/
    }

    //refWithClientData = {};

    /*componentWillReceiveProps = (newProps) => {
        console.log('componentWillReceiveProps'); 
        this.setState({
            id:newProps.id,
            name:newProps.name,
            cost:newProps.cost,
            photoUrl:newProps.photoUrl,
            count:newProps.count,
        }); // сработает при обновлении компонента (WRP+WU+DU)
    };*/

    clientFRef = null;
    clientIRef = null;
    clientORef = null;
    balanceRef = null;

    save = () => {
        let clientData = {
            id: this.props.clients[this.props.clientToEdit].id,
            clientF: this.clientFRef.value,
            clientI: this.clientIRef.value,
            clientO: this.clientORef.value,
            balance: parseInt(this.balanceRef.value),
        };
        //{id:101, clientF:"Иванов", clientI:"Иван", clientO:"Иванович", balance:200}
        mobileEvents.emit('ESave', clientData
            /*this.state.id,
            this.state.name,
            this.state.cost,
            this.state.photoUrl,
            this.state.count*/
        );
    }

    add = () => {
        mobileEvents.emit('EAdd',
            /*this.state.id,
            this.state.name,
            this.state.cost,
            this.state.photoUrl,
            this.state.count*/
        );
    }

    cancel = () => {
        mobileEvents.emit('ECancel');
    }

    //ref's на поля формы редактирования/добавления
    

    setClientFRef = (ref) => {
        this.clientFRef=ref;
    };

    setClientIRef = (ref) => {
        this.clientIRef=ref;
    };

    setClientORef = (ref) => {
        this.clientORef=ref;
    };

    setBalanceRef = (ref) => {
        this.balanceRef=ref;
    };

    render() {
        return(
            <div className="TableAddEdit">
              <div className="ClientAddEdit">
                <div className="ClId">ID: {this.props.clients[this.props.clientToEdit].id}</div>
                <div className="ClParam">
                  <div className="ClKey">Фамилия</div>
                  <div className="ClVal"><input defaultValue={this.props.clients[this.props.clientToEdit].clientF} ref={this.setClientFRef}/></div>
                </div>
                <div className="ClParam">
                  <div className="ClKey">Имя</div>
                  <div className="ClVal"><input defaultValue={this.props.clients[this.props.clientToEdit].clientI} ref={this.setClientIRef}/></div>
                </div>
                <div className="ClParam">
                  <div className="ClKey">Отчество</div>
                  <div className="ClVal"><input defaultValue={this.props.clients[this.props.clientToEdit].clientO} ref={this.setClientORef}/></div>
                </div>
                <div className="ClParam">
                  <div className="ClKey">Количество</div>
                  <div className="ClVal"><input defaultValue={this.props.clients[this.props.clientToEdit].balance} ref={this.setBalanceRef}/></div>
                </div>
                {
                    (this.props.mode === 1) &&
                    <input className="SaveButton" type="button" value="Сохранить" onClick={this.save}/>
                }
                {
                    (this.props.mode === 2) &&
                    <input className="SaveButton" type="button" value="Добавить" onClick={this.add}/>
                }
                <input type="button" value="Отмена" onClick={this.cancel}/>
              </div>
            </div>
        )
    }

}

export default ClientAddEdit;