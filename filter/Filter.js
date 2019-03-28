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
		this.processList(EO.target.value, this.state.isSorted);
		
		//можно выполнить следующий код вместо вызова "processList"
		/*var stringsForRender = this.props.dictionary.filter(oneString => oneString.indexOf(EO.target.value) !== -1);
		
		this.setState({dictionaryState : stringsForRender});
		this.setState({searchText: EO.target.value});*/
    },

    sortAll: function(EO){
		this.processList(this.state.searchText, EO.target.checked);
		
		//можно выполнить следующий код вместо вызова "processList"
		/*var stringsForRender = this.props.dictionary.filter(oneString => oneString.indexOf(this.state.searchText) !== -1);
		
		EO.target.checked
			?stringsForRender.sort()
			:null
			
		this.setState({isSorted:EO.target.checked});
		this.setState({dictionaryState : stringsForRender});*/
    },

    clearAll: function() {
        this.setState({searchText: ""});
        this.setState({isSorted:false});
		this.setState({dictionaryState: this.props.dictionary});
    },

	processList: function(searchText, isSorted) {
		var stringsForRender = this.props.dictionary.filter(oneString => oneString.indexOf(searchText) !== -1);

		isSorted
			?stringsForRender.sort()
            :null
		
		this.setState({dictionaryState : stringsForRender});
		this.setState({searchText:searchText});
		this.setState({isSorted:isSorted});
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
