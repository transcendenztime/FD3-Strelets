var Filter = React.createClass({

    displayName: 'Filter',
    
    propTypes: {
      dictionary: React.PropTypes.arrayOf(React.PropTypes.string),
      //defaultSearchText : React.PropTypes.string,
    },
 
    getDefaultProps: function() {
        return {};
    },
    
    getInitialState: function() {
        return { 
          searchText: "",
          isSorted: false,
          //searchText: this.props.defaultSearchText,
		  dictionaryState: this.props.dictionary,
        };
    },

    searchTextChanged: function(EO) {
        //console.log(EO.target.value);
        /*this.setState({searchText: EO.target.value},function() {
            this.processList();
        });*/
        this.setState({searchText: EO.target.value},this.processList);
    },

    sortAll: function(EO){
        //console.log(EO.target.checked);
        /*this.setState({isSorted:EO.target.checked},function() {
            this.processList();
        });*/
        this.setState({isSorted:EO.target.checked},this.processList);
    },

    clearAll: function() {
        this.setState({searchText: "",isSorted:false,dictionaryState: this.props.dictionary});
        //this.setState({isSorted:false});
		//this.setState({dictionaryState: this.props.dictionary});
    },
    
    processList: function() {
		var stringsForRender = this.props.dictionary.filter(oneString => oneString.indexOf(this.state.searchText) !== -1);

		this.state.isSorted
			?stringsForRender.sort()
            :null
		
		this.setState({dictionaryState : stringsForRender});
	},
	
    render: function() {

        var allStrings = [];
        var strKey=0;
		//console.log(this.state.dictionaryState);
        
		this.state.dictionaryState.forEach(function(str) {
            var oneString = 
              React.DOM.div({key: strKey,className:'FilterRow'}, str, );
              allStrings.push(oneString);
              strKey++;
        }
        );

        return React.DOM.div(null,
            React.DOM.div({className: 'ControlDiv'},
                React.DOM.input({type:'checkbox',value:'sort',name:'sort',
                    checked: this.state.isSorted, onClick:this.sortAll}),
                React.DOM.input({type:'text',name:'searchfield',className:'SearchField',
                    value:this.state.searchText,onChange:this.searchTextChanged}),
                React.DOM.input({type:'button',name:'clearbutton',className:'ClearButton',
                    value:'сброс',onClick:this.clearAll}),
            ),
            React.DOM.div( {className:'StringsContainer'}, allStrings, ),
        );
    },
});
