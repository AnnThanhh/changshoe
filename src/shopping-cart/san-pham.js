import React, { Component } from "react";
import Modalinfo from "./modal-chi-tiet";

export default class SanPham extends Component {
  render() {
    const { name, image } = this.props.product;
    const {product} = this.props
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <button
              className="btn btn-success"
              data-toggle="modal"
              data-target="#modelinfo"
            >
              Chi tiết
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.getProductAddCart(this.props.product);
              }}
            >
              Thêm giỏ hàng
            </button>
          </div>
        </div>
        <Modalinfo product={product}/>
      </div>
    );
  }
}
