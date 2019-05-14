import React from 'react';
import PropTypes from 'prop-types';

import {mobileEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      clientF: PropTypes.string.isRequired,
      clientI: PropTypes.string.isRequired,
      clientO: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  componentWillReceiveProps = (newProps) => {
    console.log("MobileClient id="+this.props.info.id+" componentWillReceiveProps");
    this.setState({info:newProps.info});
  };

  //редактирование клиента
  editClient = () => {
    mobileEvents.emit('EEditClient',this.props.info.id);
  }

  //удаление клмента
  deleteRow = () => {
    if(confirm("Удалить товар?"))
    {
      //this.props.cbDeleteRow(this.props.id);
      mobileEvents.emit('EDeleteRow',this.props.info.id);    
    }
  }

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    
    return (
      <tr className="MobileClient">
        <td className='Str'>{this.state.info.clientF}</td>
        <td className='Str'>{this.state.info.clientI}</td>
        <td className='Str'>{this.state.info.clientO}</td>
        <td className='MobileClientBalance'>{this.state.info.balance}</td>
        {
          (this.state.info.balance>=0)
          ?<td className='MobileClientBalance MobileClientBalanceActive'>active</td>
          :<td className='MobileClientBalance MobileClientBalanceBlocked'>blocked</td>
        }
        <td className="Control"><input type="button" value="Редактировать" onClick={this.editClient}/></td>
        <td className="Control"><input type="button" value="Удалить" onClick={this.deleteRow}/></td>
      </tr>

    );

  }

}

export default MobileClient;
