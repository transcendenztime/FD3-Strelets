var Filter = React.createClass({

    displayName: 'Filter',
    
    propTypes: {
      /*id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      cost: React.PropTypes.number.isRequired,
      photoUrl: React.PropTypes.string.isRequired,
      count: React.PropTypes.number.isRequired,
      cbMarked: React.PropTypes.func.isRequired,
      cbDeleteRow: React.PropTypes.func.isRequired,
      selectedTableRow: React.PropTypes.number,*/ // может быть null, пока ни один ответ не выбран
      dictionary: React.PropTypes.arrayOf(React.PropTypes.string),
    },
 
    getDefaultProps: function() {
        return { /*shopName: "Мой интернет-магазин",*/};
    },
    
    getInitialState: function() {
        return { 
          /*selectedTableRow: null, //номер выделенной строки
          productsState: this.props.products,*/
          dictionaryState: this.props.dictionary,
          searchText: "",
        };
    },

    searchTextChanged: function(EO) {
        this.setState({searchText:EO.target.value});
        //console.log('Текст в строке поиска изменен - '+EO.target.value);
        
        /*var strings = this.props.dictionary;
        var searchStrings = strings.filter(oneString => oneString.indexOf(EO.target.value) !== -1);*/
        //var strings = this.props.dictionary;
        var searchStrings = this.props.dictionary.filter(oneString => oneString.indexOf(EO.target.value) !== -1);
        this.setState({dictionaryState:searchStrings});
    },

    render: function() {

        var allStrings = [];
        var strKey=0;
        this.state.dictionaryState.forEach(function(str) {
            var oneString = 
              React.DOM.div({key:strKey,className:'FilterRow'}, str, );
              allStrings.push(oneString);
              strKey++;
        }
        );

        return React.DOM.div(null,
            React.DOM.div({className: 'ControlDiv'},
                React.DOM.input({type:'text',name:'searchfield',className:'SearchField',
                    defaultValue:this.state.searchText,onChange:this.searchTextChanged})
            ),
            React.DOM.div( {className:'StringsContainer'}, allStrings, ),
        );

    },
    
});
