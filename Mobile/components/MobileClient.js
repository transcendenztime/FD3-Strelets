import React from 'react';
import PropTypes from 'prop-types';

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

  render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    
    return (
      <div className='MobileClient'>
        <span className='MobileClientFIO'>{this.state.info.clientF}</span>
        <span className='MobileClientFIO'>{this.state.info.clientI}</span>
        <span className='MobileClientFIO'>{this.state.info.clientO}</span>
        {
          (this.state.info.balance>=0)
          ?<span className='MobileClientBalance MobileClientBalanceActive'>аккаунт активен</span>
          :<span className='MobileClientBalance MobileClientBalanceBlocked'>аккаунт блокирован</span>
        }
        <span className='MobileClientBalance'>{this.state.info.balance}</span>
      </div>
    );

  }

  /*render() {

    console.log("MobileClient id="+this.state.info.id+" render");
    
    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance'>{this.state.info.balance}</span>
        <span className='MobileClientFIO'>{this.state.info.fio}</span>
      </div>
    );

  }*/

}

export default MobileClient;
