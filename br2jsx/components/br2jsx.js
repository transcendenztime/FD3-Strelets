import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './br2jsx.css';

class Br2Jsx extends React.Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  render() {

    let reg = /<br\s?\/?>/;
    let arrOfStr = this.props.text.split(reg);
    let resultArr = [];
    arrOfStr.forEach((el,ind) => {
      if(ind != arrOfStr.length - 1)
      {
        resultArr.push(<Fragment key={ind}>{el}<br/></Fragment>);
      }else{//после последнего элемента не добавляем <br>
        resultArr.push(<Fragment key={ind}>{el}</Fragment>);
      }
    });
    //console.log(resultArr);
    return (
      <div className="Br2jsx">{resultArr}</div>
    );
  }

}

export default Br2Jsx;
