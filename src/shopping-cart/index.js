import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class ShoppingShoe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: data,
      productDetail: null,
      listCart: [],
    };
  }

  findIndexProduct = (maSP) =>
    this.state.listCart.findIndex((product) => product.maSP === maSP);

  handleAddCart = (product) => {
    const productCart = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      qty: product.quantity,
    };

    const listCartClone = [...this.state.listCart];
    const index = this.findIndexProduct(productCart.id);
    if (index !== -1) {
      listCartClone[index].qty += 1;
    } else {
      listCartClone.push(productCart);
    }

    this.setState({
      listCart: listCartClone,
    });
  };

  handleDeleteProduct = (id) => {
    const listCartFilter = this.state.listCart.filter(
      (product) => product.id !== id
    );
    this.setState({
      listCart: listCartFilter,
    });
  };

  handleUpdateQty = (id, isPlus) => {
    const listCartClone = [...this.state.listCart];
    const index = this.findIndexProduct(id);
    if (index !== -1) {
      if (isPlus) {
        listCartClone[index].qty += 1;
      } else {
        if (listCartClone[index].qty > 1) {
          listCartClone[index].qty -= 1;
        }
      }
      this.setState({
        listCart: listCartClone,
      });
    }
  };

  render() {
    const { listCart } = this.state;
    return (
      <div>
        <h3 className="title">Shoe Store</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng
          </button>
        </div>
        <DanhSachSanPham
          listProduct={this.state.listProduct}
          getProduct={this.handleRenderDetailProduct}
          getProductAddCart={this.handleAddCart}
        />
        <Modal
          listCart={listCart}
          getProductDelete={this.handleDeleteProduct}
          getProductUpdateQty={this.handleUpdateQty}
        />
      </div>
    );
  }
}
