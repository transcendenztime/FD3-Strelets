import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

class ClientAddEdit extends React.PureComponent {

    static propTypes = {
        //mode: 1 - редактирование клиента
        //mode: 2 - добавление клиента
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
        mobileEvents.emit('ESave', clientData);
    }

    add = () => {
        let clientData = {
            id: this.props.clientToEdit,
            clientF: this.clientFRef.value,
            clientI: this.clientIRef.value,
            clientO: this.clientORef.value,
            balance: parseInt(this.balanceRef.value),
        };
        mobileEvents.emit('EAdd', clientData);
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
            {
                (this.props.mode === 1) &&
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
                    <div className="ClKey">Баланс</div>
                    <div className="ClVal"><input defaultValue={this.props.clients[this.props.clientToEdit].balance} ref={this.setBalanceRef}/></div>
                    </div>
                    <input className="SaveButton" type="button" value="Сохранить" onClick={this.save}/>
                    <input type="button" value="Отмена" onClick={this.cancel}/>
                </div>
            }
            {
                (this.props.mode === 2) &&
                <div className="ClientAddEdit">
                    <div className="ClId">ID: {this.props.clientToEdit}</div>
                    <div className="ClParam">
                    <div className="ClKey">Фамилия</div>
                    <div className="ClVal"><input defaultValue="" ref={this.setClientFRef}/></div>
                    </div>
                    <div className="ClParam">
                    <div className="ClKey">Имя</div>
                    <div className="ClVal"><input defaultValue="" ref={this.setClientIRef}/></div>
                    </div>
                    <div className="ClParam">
                    <div className="ClKey">Отчество</div>
                    <div className="ClVal"><input defaultValue="" ref={this.setClientORef}/></div>
                    </div>
                    <div className="ClParam">
                    <div className="ClKey">Баланс</div>
                    <div className="ClVal"><input defaultValue="" ref={this.setBalanceRef}/></div>
                    </div>
                    <input className="SaveButton" type="button" value="Добавить" onClick={this.add}/>
                    <input type="button" value="Отмена" onClick={this.cancel}/>
                </div>
            }
            </div>
        )
    }

}

export default ClientAddEdit;