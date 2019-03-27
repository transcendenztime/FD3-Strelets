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
        };
    },

    searchTextChanged: function(EO) {
        this.setState({searchText:EO.target.value});
    },

    sortAll: function(EO){
        this.setState({isSorted:EO.target.checked});
    },

    clearAll: function() {
        this.setState({searchText: ""});
        this.setState({isSorted:false});
    },

    render: function() {

        var allStrings = [];
        var strKey=0;

        var stringsForRender = this.props.dictionary.filter(oneString => oneString.indexOf(this.state.searchText) !== -1);
        //сортируем массив строк, если isSorted == true
        this.state.isSorted
            ?stringsForRender.sort()
            :null

        stringsForRender.forEach(function(str) {
            var oneString = 
              React.DOM.div({key:strKey,className:'FilterRow'}, str, );
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
