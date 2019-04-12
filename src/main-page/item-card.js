import React from 'react'


function ItemCard (props){
   return (<div className="card">
        <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                {/*<a href="#" className="btn btn-primary" onClick={(e)=> this.props.addToCart(props.id)}>Add to Cart</a>*/}
                {/*<a href="http" className="btn btn-primary" onClick={(e)=> this.props.seeDetails(props.id)}</a>*/}

            </div>
    </div>)
}

export default ItemCard