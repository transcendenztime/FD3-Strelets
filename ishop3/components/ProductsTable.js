import React from 'react';
import PropTypes from 'prop-types';
//import DOM from 'react-dom-factories';

import './ProductsTable.css';

import TableHeader from './TableHeader';
import Product from './Product';
import ProductView from './ProductView';
import ProductAddEdit from './ProductAddEdit';

class ProductsTable extends React.Component {

  static propTypes = {
    shopName: PropTypes.string,
    tableHeaders: PropTypes.object,
    products: PropTypes.array,
  }

  /*getDefaultProps: function() {
    return { shopName: "Мой интернет-магазин",};
  },*/

  state = {
    selectedTableRow: null, //номер выделенной строки
    productsState: this.props.products, //массив с товарами
    productToView: null, //тут храним хеш с элементами просматриваемого товара
    productToEdit: null, //тут храним хеш с элементами редактируемого товара
    //mode: 0 - только таблица
    //      1 - просмотр товара
    //      2 - редактирование товара
    //      3 - добавление товара
    mode: 0,
    //isAnyProductChanged: станет равен true, если в каком-либо товаре есть несохраненные изменения
    isAnyProductChanged: false,
  }

  productMarked = (id) => {
    this.setState( {selectedTableRow:id} );
    //получаем данные товара для просмотра
    let productToViewIndex = this.state.productsState.findIndex(x => x.id === id);
    this.setState( {productToView: this.state.productsState[productToViewIndex],
      productToEdit: null,
      mode: 1,
    } );
  }

  //редактирование товара
  editProduct = (id) => {
    let productToEditIndex = this.state.productsState.findIndex(x => x.id === id);
    this.setState( {productToEdit: this.state.productsState[productToEditIndex],
      selectedTableRow: null,
      productToView: null,
      mode: 2,
    } );
  }

  //сохраняем товар
  save = (id, name, cost, photoUrl, count) => {
    let newEditProductData = {id,name,cost,photoUrl,count};//хэш с новым товаром
    let tmpPoductsState = this.state.productsState.slice();
    let editIndex = tmpPoductsState.findIndex(x => x.id === id);
    //меняем данные редактируемого товара, перезаписав хэш по индексу в массиве товаров
    tmpPoductsState[editIndex] = newEditProductData;
    this.setState({productsState: tmpPoductsState,
      productToEdit: null,
      mode: 0,
      isAnyProductChanged: false,//указываем, что несохраненных данных о товаре нет
    });
  }

  //долбавляем товар
  add = (id, name, cost, photoUrl, count) => {
    //console.log(this.state.productsState[this.state.productsState.length - 1]);
    let newAddProductData = {id,name,cost,photoUrl,count};//хэш с новым товаром
    let tmpPoductsState = this.state.productsState.slice();
    //let editIndex = tmpPoductsState.findIndex(x => x.id === id);
    //меняем данные редактируемого товара, перезаписав хэш по индексу в массиве товаров
    //tmpPoductsState[editIndex] = newAddProductData;
    tmpPoductsState.push(newAddProductData);
    this.setState({productsState: tmpPoductsState,
      //productToEdit: null,
      mode: 0,
      isAnyProductChanged: false,//указываем, что несохраненных данных о товаре нет
    });
  }

  //отмена
  cancel = () => {
    this.setState({productToEdit: null,
      mode: 0,
      isAnyProductChanged: false,//указываем, что несохраненных данных о товаре нет
    });
  }

  //нажали на кнопку "Добавить товар"
  addNewProduct = () => {
    //console.log(this.state.productsState[this.state.productsState.length - 1].id);
    this.setState({mode: 3,
      selectedTableRow: null,
      productToView: null,
      isAnyProductChanged: true,
    });
  }

  productNotSave = () => {
    this.setState({isAnyProductChanged: true});
  }

  deleteRow = (id) => {
    let tmpPoductsState = this.state.productsState;
    //найдем индекс удаляемого элемента,
    //так как он не соответствует "id", который пришел из callback'а
    let deleteIndex = tmpPoductsState.findIndex(x => x.id === id);
    tmpPoductsState.splice(deleteIndex, 1);//удалим элемент (товар) из массива
    this.setState( {productsState:tmpPoductsState} );
    //если удаляется выбранный для товар, нужно закрыть его карточку карточку
    //обнуляем state, где хранится номер товара для просмотра
    //компонент перерисуется без карточки товара
    if(id === this.state.selectedTableRow)
    {
      this.setState( {productToView: null,
        mode:0,
      } );
    }
  }

  render() {

    let tableHeader = 
    <TableHeader key={0}
      hId={this.props.tableHeaders.hId} hName={this.props.tableHeaders.hName}
      hCost={this.props.tableHeaders.hCost} hPhotoUrl={this.props.tableHeaders.hPhotoUrl}
      hCount={this.props.tableHeaders.hCount} hControl={this.props.tableHeaders.hControl}
    />;

    let allProducts = this.state.productsState.map( p =>
      <Product key={p.id} 
        id={p.id} name={p.name} cost={p.cost} photoUrl={p.photoUrl} count={p.count}
        cbMarked={this.productMarked}
        cbEditProduct={this.editProduct}
        cbDeleteRow={this.deleteRow}
        selectedTableRow={this.state.selectedTableRow}
        mode={this.state.mode}
        isAnyProductChanged={this.state.isAnyProductChanged}
      />
    );

    return (
      <div className="ProductsTable">
        <h1 className="ShopName">{this.props.shopName}</h1>
        <h2 className="InfoDiv">Таблица со списком товаров:</h2>
        <div className="ProductsMainDiv">
          <div className="ProductsTableLeft">
            <table className="ProductsTableOne">
              <thead>{tableHeader}</thead>
              <tbody>{allProducts}</tbody>
            </table>
            <input className="AddButton" type="button" value="Добавить товар"
                disabled={(this.state.mode > 1)} onClick={this.addNewProduct}
              />
          </div>
          { 
            (this.state.mode === 1) &&/*(this.state.productToView) &&*/
            <div className="ProductsTableRight">
              <h2>Просмотр товара: {this.state.productToView.name}</h2>
              <ProductView key={this.state.productToView.id}
              id={this.state.productToView.id}
              name={this.state.productToView.name}
              cost={this.state.productToView.cost}
              photoUrl={this.state.productToView.photoUrl}
              count={this.state.productToView.count} />
            </div>
          }
          {
            (this.state.mode === 2) &&/*(this.state.productToEdit) &&*/
            <div className="ProductsTableRight">
              <h2>Редактирование товара</h2>
              <ProductAddEdit key={this.state.productToEdit.id}
              id={this.state.productToEdit.id}
              name={this.state.productToEdit.name}
              cost={this.state.productToEdit.cost}
              photoUrl={this.state.productToEdit.photoUrl}
              count={this.state.productToEdit.count}
              cbSave={this.save}
              cbCancel={this.cancel}
              cbProductNotSave={this.productNotSave}
              mode={this.state.mode}
            />
            </div>
          }
          {
            (this.state.mode === 3) &&/*(this.state.productToEdit) &&*/
            <div className="ProductsTableRight">
              <h2>Добавление нового товара</h2>
              <ProductAddEdit key={this.state.productsState[this.state.productsState.length - 1].id + 1}
              id={this.state.productsState[this.state.productsState.length - 1].id + 1}
              name={""}
              cost={""}
              photoUrl={""}
              count={""}
              cbSave={this.add}
              cbCancel={this.cancel}
              cbProductNotSave={this.productNotSave}
              mode={this.state.mode}
            />
            </div>
          }
        </div>
      </div>
    )
  }
}

export default ProductsTable;