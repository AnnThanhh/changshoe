import React, { Component } from "react";

export default class Modalinfo extends Component {
  render() {
    const {product} = this.props
    return (
      <div
        className="modal fade"
        id="modelinfo"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Chi tiết sản phẩm</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
            <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={product?.image} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Giới thiệu chi tiết</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên Sản Phẩm</td>
                  <td>{product?.name}</td>
                </tr>
                <tr>
                  <td>Giá Bán</td>
                  <td>{product?.price}</td>
                </tr>
                <tr>
                  <td>Mô Tả</td>
                  <td>{product?.description}</td>
                </tr>
                <tr>
                  <td>Mô Tả Ngắn</td>
                  <td>{product?.shortDescription}</td>
                </tr>
                <tr>
                  <td>Kho</td>
                  <td>{product?.shortDescription}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



