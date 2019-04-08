import React from 'react';
import PropTypes from 'prop-types';

import './ProductView.css';

class ProductView extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        photoUrl: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        //cbMarked: PropTypes.func.isRequired,
        //cbDeleteRow: PropTypes.func.isRequired,
        //selectedTableRow: PropTypes.number, */
    };

    render() {
        return(
            <table className="ProductView">
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{this.props.id}</td>
                    </tr>
                    <tr>
                        <td>Название:</td>
                        <td>{this.props.name}</td>
                    </tr>
                    <tr>
                        <td>Цена:</td>
                        <td>{this.props.cost}</td>
                    </tr>
                    <tr>
                        <td>Url фото:</td>
                        <td>{this.props.photoUrl}</td>
                    </tr>
                    <tr>
                        <td>Количество:</td>
                        <td>{this.props.count}</td>
                    </tr>
                </tbody>
            </table>
        )
    }

}

export default ProductView;