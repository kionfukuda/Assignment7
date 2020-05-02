/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Button, Glyphicon, Tooltip, OverlayTrigger, Table,
} from 'react-bootstrap';

const ProductRow = withRouter(({ 
  product, deleteProduct, index, 
}) => {
  const deleteTooltip = (
    <Tooltip id="delete-tooltip" placement="top">Delete Product</Tooltip>
  );
  const showImageTooltip = (
    <Tooltip id="show-image-tooltip" placement="top">Show Image</Tooltip>
  );
  const editTooltip = (
    <Tooltip id="close-tooltip" placement="top">Edit Issue</Tooltip>
  );

  function onDelete(e) {
    e.preventDefault();
    deleteProduct(index);
  }

  const tableRow = (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>
        $
        {product.price}
      </td>
      <td>{product.category}</td>
      <td width="60">
        <OverlayTrigger delayShow={1000} overlay={showImageTooltip}>
          <a href="#" onClick={() => { window.open(product.image) }}>  View</a>
        </OverlayTrigger>
      </td>
      <td>
        <LinkContainer to={`/edit/${product.id}`}>
          <OverlayTrigger delayShow={1000} overlay={editTooltip}>
            <Button bsSize="xsmall">
              <Glyphicon glyph="edit" />
            </Button>
          </OverlayTrigger>
        </LinkContainer>
        {' '}
        <OverlayTrigger delayShow={1000} overlay={deleteTooltip}>
          <Button bsSize="xsmall" onClick={onDelete}>
            <Glyphicon glyph="trash" />
          </Button>
        </OverlayTrigger>
      </td>
    </tr>
  );
  return (
    tableRow
  );
});

export default function ProductTable({ products, deleteProduct }) {
  const productRows = products.map((product, index) => (
    <ProductRow 
      key={product.id} 
      product={product} 
      deleteProduct={deleteProduct}
      index={index}
    />
  ));

  return (
    <Table bordered hover responsive striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {productRows}
      </tbody>
    </Table>
  );
}
