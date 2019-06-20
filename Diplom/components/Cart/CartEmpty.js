import React from 'react';

class CartEmpty extends React.PureComponent {
          
  render() {

    return (
        <div className = "cart-empty">
          <h3 className="page-subtitle">
            В вашей корзине пусто!
          </h3>
          <p>
           Для добавления продуктов в корзину нажмите на кнопку с изображением корзины "<i className="fas fa-shopping-cart"></i> 
            " рядом с выбранным продуктом           
          </p>
        </div>
        
    );
    
  }

}
    
export default CartEmpty;