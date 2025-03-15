import React from "react";

const Cards = () => {
    return (

<div class="card grid grid-cols-1 md:grid-cols-1 gap-1 p-1">
  <img src="https://picsum.photos/300/200" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Find out More!</a>
  </div>
</div>
    );
};


export default Cards;