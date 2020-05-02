/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { Panel } from 'react-bootstrap';

import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import graphQLFetch from './graphQLFetch.js';

export default class ProductList extends React.Component {
  constructor() {
    super();
    const stat = null;
    this.state = { products: [], stat};
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      productList {
        id category name price image
      }
      productCounts
    }`;

    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList, stat: data.productCounts} );
    }
  }

  async createProduct(product) {
    const query = `mutation {
      productAdd(product:{
        category: ${product.category},
        name: "${product.name}",
        price: ${product.price},
        image: "${product.image}",
      }) {
        id
      }
    }`;

    const data = await graphQLFetch(query, { product });
    if (data) {
      this.loadData();
    }
  }

  async deleteProduct(index) {
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
    }`;
    const { products } = this.state;
    const { location: { pathname, search }, history } = this.props;
    const { id } = products[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.productDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.products];
        if (pathname === `/products/${id}`) {
          history.push({ pathname: '/products', search });
        }
        newList.splice(index, 1);
        return { products: newList };
      });
    } else {
      this.loadData();
    }
  }

  render() {
    const { products } = this.state;
    const { stat } = this.state;

    return (
      <React.Fragment>
        <Panel>
          <Panel.Heading>
            <Panel.Title>Product Table</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Panel.Title>Showing {stat} available products<hr></hr></Panel.Title>
            <ProductTable
              products={products}
              deleteProduct={this.deleteProduct}
            />
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            <Panel.Title>Add Product</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <ProductAdd createProduct={this.createProduct}/>
          </Panel.Body>
        </Panel>
      </React.Fragment>
    );
  }
}
