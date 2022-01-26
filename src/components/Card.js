import React from "react";

const Card = () => {
  return (
    <div
      className="p-3 m-3 d-flex justify-content-center "
      style={{ background: "#0A0A0A" }}
    >
      <div className="card p-1 m-3 " style={{ width: "16rem" }}>
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Esa5hk256pfM68WifavLRncrp9_DxdhMufTGMUiWiU16P9XfOVeaMXRc7BS5HPYhbBo&usqp=CAU"
          alt="Card image cap"
        />
        <button class="rounded-3 btn btn-secondary btn-sm opacity-75">
          9,7
        </button>

        <div className="card-body">
          <h5 className="card-title">🍿Card title movie </h5>

          <i className="card-text">Nombre director</i>
          <div
            class="btn-group p-2 m-2 "
            role="group"
            aria-label="Basic outlined example"
          >
            <button type="button" class=" btn btn-outline-success">
              Update
            </button>

            <button type="button" class="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
