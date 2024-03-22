"use client";

function Pagenoo({ params }) {
    console.log(params , 'params')
  return (
    <div>
      <h1>Product Details</h1>
      <h1> id :{params.pagenoo}</h1>
    </div>
  );
}

export default Pagenoo;
