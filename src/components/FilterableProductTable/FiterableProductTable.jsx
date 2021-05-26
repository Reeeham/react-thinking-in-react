import React from 'react';
import ProductTable from './ProductTable/ProductTable';
import SearchBar from './SearchBar/SearchBar';


class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        //filter text and inStockOnly(checkbox) only the changeable ones so we made them in state not props
        //but products and filtered list of products static we can pass them using props from top-bottom hierarchy
        this.state = {
            filterText: '',
            inStockOnly: false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        })
    }

    render() {
        return (<div>
            <SearchBar filterText={this.state.filterText}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockChange={this.handleInStockChange} />
            <ProductTable products={this.props.products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
            />
        </div>);
    }
}


export default FilterableProductTable;