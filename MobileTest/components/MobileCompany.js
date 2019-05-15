import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

import MobileClient from './MobileClient';
import ClientAddEdit from './ClientAddEdit';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    //name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        clientF: PropTypes.string.isRequired,
        clientI: PropTypes.string.isRequired,
        clientO: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    //name: this.props.name,
    clients: this.props.clients,
    clientToEdit: null,
    //mode: 0 - только таблица
    //mode: 1 - редактирование клиента
    //mode: 2 - добавление клиента
    mode: 0,
    clientsFilter: "all",
  };

  componentDidMount = () => {
    mobileEvents.addListener('EEditClient',this.editClient);
    mobileEvents.addListener('EDeleteRow',this.deleteRow);
    mobileEvents.addListener('ESave',this.save);
    mobileEvents.addListener('EAdd',this.add);
    mobileEvents.addListener('ECancel',this.cancel);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener('EEditClient',this.editClient);
    mobileEvents.removeListener('EDeleteRow',this.deleteRow);
    mobileEvents.removeListener('ESave',this.save);
    mobileEvents.removeListener('EAdd',this.add);
    mobileEvents.removeListener('ECancel',this.cancel);
  };

  clientsFilterAll = () => {
    this.setState({clientsFilter: "all"});
  }

  clientsFilterActive = () => {
    this.setState({clientsFilter: "active"});
  }

  clientsFilterBlocked = () => {
    this.setState({clientsFilter: "blocked"});
  }

  //сохраняем клиента
  save = (cliendData) => {
    let changed=false;

    let newClients=[...this.state.clients]; // копия самого массива клиентов
    let editIndex = newClients.findIndex(x => x.id === cliendData.id);
    //если изменилось хоть одно поле с данными клиента, тогда устанавливаем changed в "true",
    //чтобы затем записать новые данные в массив клиентов путем вызова setState()
    if(newClients[editIndex].id !== cliendData.id ||
      newClients[editIndex].clientF !== cliendData.clientF ||
      newClients[editIndex].clientI !== cliendData.clientI ||
      newClients[editIndex].clientO !== cliendData.clientO ||
      newClients[editIndex].balance !== cliendData.balance
    )
    {
      newClients[editIndex] = cliendData;
      changed = true;
    }
    console.log(cliendData);
    
    this.setState({clientToEdit: null,
      mode: 0,
    });

    if ( changed )
      this.setState({clients:newClients});
  }

  add = (cliendData) => {
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.push(cliendData);
    this.setState({clientToEdit: null,
      mode: 0,
      clients:newClients,
    });
  }

  //отмена
  cancel = () => {
    this.setState({clientToEdit: null,
      mode: 0,
    });
  }

  editClient = (id) => {
    let clientToEditIndex = this.state.clients.findIndex(x => x.id === id);
    this.setState( {clientToEdit: clientToEditIndex,
      mode: 1,
    } );
  }

  addNewClient = () => {
    let clientToEditIndex = this.state.clients[this.state.clients.length - 1].id + 1;
    this.setState( {clientToEdit: clientToEditIndex,
      mode: 2,
    } );
  }

  deleteRow = (id) => {
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    //найдем индекс удаляемого клиента,
    //так как он не соответствует "id", который пришел из callback'а
    let deleteIndex = newClients.findIndex(x => x.id === id);
    newClients.splice(deleteIndex, 1);//удалим элемент (клиента) из массива
    this.setState( {clients:newClients} );
    //компонент перерисуется без карточки клиента
    this.setState( {mode:0} );
  }

  /*setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };*/

  render() {

    console.log("MobileCompany render");
    //console.log(this.props.clients);

    let clientsCode = [];
    
    this.state.clients.forEach( client => {
      if(this.state.clientsFilter == "all"){
        clientsCode.push(<MobileClient key={client.id} info={client}/>);
      }
      else if (this.state.clientsFilter == "active") {
        if(client.balance > 0){
          clientsCode.push(<MobileClient key={client.id} info={client}/>);
        }
      }
      else if(this.state.clientsFilter == "blocked"){
        if(client.balance <= 0) {
        clientsCode.push(<MobileClient key={client.id} info={client}/>);
        }
      }
    });

    return (
      <div className='MobileCompany'>
        {/*
        <input type="button" value="МТС" onClick={this.setName1} />
        <input type="button" value="Velcom" onClick={this.setName2} />
        <div className="MobileCompanyName">Компания &laquo;{this.state.name}&raquo;</div>
        */}
        <div className="FilterButtons">
          <button className="FilterAll" onClick={this.clientsFilterAll}>Все</button>
          <button className="FilterActive" onClick={this.clientsFilterActive}>Активные</button>
          <button className="FilterBlocked" onClick={this.clientsFilterBlocked}>Заблокированные</button>
        </div>
        <div className="MobileCompanyClients">
          <table>
            <thead>
              <tr className="ClientsHeader">
                  <td>Фамилия</td>
                  <td>Имя</td>
                  <td>Отчество</td>
                  <td>Баланс</td>
                  <td>Статус</td>
                  <td>Редактировать</td>
                  <td>Удалить</td>
              </tr>
            </thead>
            <tbody>
              {clientsCode}
            </tbody>
          </table>
          <input className="AddButton" type="button" value="Добавить клиента" onClick={this.addNewClient}/>
        </div>
        {
          (this.state.mode === 1 || this.state.mode === 2) &&
          <div className="TableRight">
            {
              (this.state.mode === 1)?
              <h2>Редактирование клиента</h2>
              :<h2>Добавление клиента</h2>
            }
            <ClientAddEdit key={this.state.clientToEdit}
              clients={this.state.clients}
              clientToEdit={this.state.clientToEdit}
              mode={this.state.mode}
            />
          </div>
        }
      </div> 
    );
  }
}

export default MobileCompany;