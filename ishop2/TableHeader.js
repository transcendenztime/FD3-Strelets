var TableHeader = React.createClass({

    displayName: 'TableHeader',
    
    propTypes: {
      hId: React.PropTypes.string.isRequired,
      hName: React.PropTypes.string.isRequired,
      hCost: React.PropTypes.string.isRequired,
      hPhotoUrl: React.PropTypes.string.isRequired,
      hCount: React.PropTypes.string.isRequired,
    },
 
    render: function() {
        return React.DOM.tr({className:'ProdHeader'},
            React.DOM.th({className:'HId'} ,this.props.hId),
            React.DOM.th({className:'HName'} ,this.props.hName),
            React.DOM.th({className:'HCost'} ,this.props.hCost),
            React.DOM.th({className:'HPhoto'} ,this.props.hPhotoUrl),
            React.DOM.th({className:'HCount'} ,this.props.hCount),
        );
    },
});