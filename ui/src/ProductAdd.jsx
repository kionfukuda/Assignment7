/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import {
  ButtonToolbar, Button, FormGroup, FormControl, ControlLabel, InputGroup,
} from 'react-bootstrap';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.state = { value: 'shirts' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.productAdd;
    const product = {
      category: this.state.value,
      price: parseFloat(form.price.value.substring(1)),
      name: form.name.value,
      image: form.image.value,
      status: 'New',
    };
    const { createProduct } = this.props;
    createProduct(product);
    form.price.value = '$'; form.name.value = ''; form.image.value = '';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form name="productAdd" onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Category:</ControlLabel>
          <FormControl
            componentClass="select"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="shirts">Shirts</option>
            <option value="jeans">Jeans</option>
            <option value="jackets">Jackets</option>
            <option value="sweaters">Sweaters</option>
            <option value="accessories">Accessories</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Price Per Unit</ControlLabel>
          <FormControl id="price" type="text" name="price" defaultValue="$" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Product Name</ControlLabel>
          <FormControl id="name" type="text" name="name" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Image URL</ControlLabel>
          <FormControl id="image" type="text" name="image" />
        </FormGroup>
        <Button bsStyle="primary" type="submit">Add Product</Button>
      </form>
    );
  }
}
