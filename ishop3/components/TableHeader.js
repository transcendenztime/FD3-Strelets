import React from 'react';
import PropTypes from 'prop-types';
//import DOM from 'react-dom-factories';

import './TableHeader.css';

class TableHeader extends React.Component {
    
    static propTypes = {
        hId: PropTypes.string.isRequired,
        hName: PropTypes.string.isRequired,
        hCost: PropTypes.string.isRequired,
        hPhotoUrl: PropTypes.string.isRequired,
        hCount: PropTypes.string.isRequired,
        hControl: PropTypes.string.isRequired,
    };

    render() {
        return (
            <tr className="ProdHeader">
                <td className="HId">{this.props.hId}</td>
                <td className="HName">{this.props.hName}</td>
                <td className="HCost">{this.props.hCost}</td>
                <td className="HPhoto">{this.props.hPhotoUrl}</td>
                <td className="HCount">{this.props.hCount}</td>
                <td className="HControl">{this.props.hControl}</td>
            </tr>
        )
    }

    /*without JSX*/
    /*render() {
        return (
            DOM.tr({className:'ProdHeader'},
                DOM.th({className:'HId'} ,this.props.hId),
                DOM.th({className:'HName'} ,this.props.hName),
                DOM.th({className:'HCost'} ,this.props.hCost),
                DOM.th({className:'HPhoto'} ,this.props.hPhotoUrl),
                DOM.th({className:'HCount'} ,this.props.hCount),
                DOM.th({className:'HControl'} ,this.props.hControl),
            )
        )
    }*/
}

/*react 15*/
/*var TableHeader = React.createClass({

    displayName: 'TableHeader',
    
    propTypes: {
      hId: React.PropTypes.string.isRequired,
      hName: React.PropTypes.string.isRequired,
      hCost: React.PropTypes.string.isRequired,
      hPhotoUrl: React.PropTypes.string.isRequired,
      hCount: React.PropTypes.string.isRequired,
      hControl: React.PropTypes.string.isRequired,
    },
 
    render: function() {
        return React.DOM.tr({className:'ProdHeader'},
            React.DOM.th({className:'HId'} ,this.props.hId),
            React.DOM.th({className:'HName'} ,this.props.hName),
            React.DOM.th({className:'HCost'} ,this.props.hCost),
            React.DOM.th({className:'HPhoto'} ,this.props.hPhotoUrl),
            React.DOM.th({className:'HCount'} ,this.props.hCount),
            React.DOM.th({className:'HControl'} ,this.props.hControl),
        );
    },
});*/

export default TableHeader;