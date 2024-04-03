import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    const { listProduct, getProduct, getProductAddCart } = this.props;

    return listProduct.map((product) => {
      return (
        <SanPham
          key={product.id}
          product={product}
          getProduct={getProduct}
          getProductAddCart={getProductAddCart}
        />
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}
