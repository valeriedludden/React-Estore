import React from 'react'
import {connect} from 'react-redux'


class SearchBar extends React.Component {

    render () {
        let search = this.props.categories.map(category => {
            return <option value={category} key={category}>{category}</option>
        });

        if (this.props.categories.length) {

            return (<div className="input-group mb-3">
                <select className="custom-select" id="inputGroupSelect02" onChange={(e)=> this.props.sort(e.target.value)}>
                    <option>Choose Category...</option>
                    {search}
                </select>
                <div className="input-group-append">
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Search Category</label>
                </div>
            </div>)
        } else {
            return <div> No products available </div>
        }
    }
}

function MapStatetoProps (state) {
    return {
        categories : state.categories
    }
}

export default connect(MapStatetoProps)(SearchBar);