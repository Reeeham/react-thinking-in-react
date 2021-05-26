
import React from 'react';
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';



class ProductTable extends React.Component{

    render(){
        const filterText =this.props.filterText;
        const inStockOnly = this.props.insStockOnly;
        const rows = [];
        let lastCategory = null;


        this.props.products.forEach((product) => {

            if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) { 
                return;
            }
            
            if(inStockOnly && !product.stocked){ 
                return;
            }

            if(product.category !== lastCategory){
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name}/>);

            lastCategory = product.category;
        });
        return (<table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>)
    }
}

export default ProductTable;