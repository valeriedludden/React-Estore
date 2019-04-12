import React from 'react'


function ItemCard (props){
   return (<div className="card">
        <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary" onClick={addToCart}>Add to Cart</a>
                <a href="#" className="btn btn-primary" onClick={seeDetails}>See Details</a>

            </div>
    </div>)
}

export default ItemCard