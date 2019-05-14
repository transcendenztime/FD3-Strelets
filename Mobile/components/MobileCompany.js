import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

import MobileClient from './MobileClient';
import ClientAddEdit from './ClientAddEdit';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
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
    name: this.props.name,
    clients: this.props.clients,
    clientToEdit: null,
    //mode: 0 - только таблица
    //      1 - редактирование клиента
    //      2 - добавление клиента
    mode: 0,
  };

  componentDidMount = () => {
    /*mobileEvents.addListener('EMarked',this.productMarked);
    mobileEvents.addListener('EProductNotSave',this.productNotSave);
    mobileEvents.addListener('EAdd',this.add);*/
    mobileEvents.addListener('EEditClient',this.editClient);
    mobileEvents.addListener('EDeleteRow',this.deleteRow);
    mobileEvents.addListener('ESave',this.save);
    mobileEvents.addListener('ECancel',this.cancel);
  };

  componentWillUnmount = () => {
    /*mobileEvents.removeListener('EMarked',this.productMarked);
    mobileEvents.removeListener('EProductNotSave',this.productNotSave);
    mobileEvents.removeListener('EAdd',this.add);*/
    mobileEvents.removeListener('EEditClient',this.editClient);
    mobileEvents.removeListener('EDeleteRow',this.deleteRow);
    mobileEvents.removeListener('ESave',this.save);
    mobileEvents.removeListener('ECancel',this.cancel);
  };

  //сохраняем товар
  save = (cliendData) => {
    let changed=false;
    
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    let editIndex = newClients.findIndex(x => x.id === cliendData.id);
    

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
    /*let newEditProductData = {id,name,cost,photoUrl,count};//хэш с новым товаром
    let tmpPoductsState = this.state.productsState.slice();
    let editIndex = tmpPoductsState.findIndex(x => x.id === id);
    //меняем данные редактируемого товара, перезаписав хэш по индексу в массиве товаров
    tmpPoductsState[editIndex] = newEditProductData;*/
    console.log(cliendData);
    
    if ( changed )
      this.setState({clients:newClients});
    
    this.setState({clientToEdit: null,
      mode: 0,
    });
  }

  //отмена
  cancel = () => {
    this.setState({clientToEdit: null,
      mode: 0,
    });
  }

  editClient = (id) => {
    //let newClients=[...this.state.clients]; // копия самого массива клиентов
    //let clientToEditIndex = newClients.findIndex(x => x.id === id);
    let clientToEditIndex = this.state.clients.findIndex(x => x.id === id);
    /*this.setState( {clientToEdit: this.state.productsState[clientToEditIndex],
      mode: 1,
    } );*/
    this.setState( {clientToEdit: clientToEditIndex,
      mode: 1,
    } );
  }

  deleteRow = (id) => {
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    //найдем индекс удаляемого клиента,
    //так как он не соответствует "id", который пришел из callback'а
    let deleteIndex = newClients.findIndex(x => x.id === id);
    newClients.splice(deleteIndex, 1);//удалим элемент (товар) из массива
    this.setState( {clients:newClients} );
    //если удаляется редактируемый для товар, нужно закрыть его карточку карточку
    //компонент перерисуется без карточки товара
    this.setState( {mode:0} );
  }

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };

  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
  
  
  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };

  render() {

    console.log("MobileCompany render");

    //console.log(this.props.clients);

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="МТС" onClick={this.setName1} />
        <input type="button" value="Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
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
        </div>
        { 
          /*(this.state.mode === 1) &&
            <div className="TableRight">
              <h2>Редактирование клиента</h2>
              <div className="ClientAddEdit">
                <div className="ClId">ID: {this.state.clients[this.state.clientToEdit].id}</div>
                <div className="ClParam">
                  <div className="ClKey">Фамилия</div>
                  <div className="ClVal"><input value={this.state.clients[this.state.clientToEdit].clientF} onChange={3+3}/></div>
                </div>
                <div className="ClParam">
                  <div className="ClKey">Имя</div>
                  <div className="ClVal"><input value={this.state.clients[this.state.clientToEdit].clientI} onChange={3+3}/></div>
                </div>
                <div className="ClParam">
                  <div className="ClKey">Отчество</div>
                  <div className="ClVal"><input value={this.state.clients[this.state.clientToEdit].clientO} onChange={3+3}/></div>
                </div>
                <div className="ClParam">
                  <div className="ClKey">Количество</div>
                  <div className="ClVal"><input value={this.state.clients[this.state.clientToEdit].balance} onChange={3+3}/></div>
                </div>
                <input className="SaveButton" type="button" value="Сохранить" onClick={this.save}/>
                <input type="button" value="Отмена" onClick={this.cancel}/>
              </div>
            </div>*/
            (this.state.mode === 1) &&
            <div className="TableRight">
              <ClientAddEdit /*key={7}*/ key={this.state.clientToEdit}
                clients={this.state.clients}
                clientToEdit={this.state.clientToEdit}
                mode={this.state.mode}
              />
            </div>
          }
      </div>
      
    )
    ;
  }
}

export default MobileCompany;
/*import MobileClient from './MobileClient';

//////////////import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fio: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
  };

  setName1 = () => {
    this.setState({name:'МТС'});
  };

  setName2 = () => {
    this.setState({name:'Velcom'});
  };
     
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
  
  
  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };
  
  render() {

    console.log("MobileCompany render");

    var clientsCode=this.state.clients.map( client =>
      <MobileClient key={client.id} info={client}  />
    );

    return (
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={this.setName1} />
        <input type="button" value="=Velcom" onClick={this.setName2} />
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          {clientsCode}
        </div>
        <input type="button" value="Сидоров=230" onClick={this.setBalance1} />
        <input type="button" value="Сидоров=250" onClick={this.setBalance2} />
      </div>
    )
    ;

  }

}

/////////////////export default MobileCompany;
*/