import React, { Component } from 'react';
import './CatList.css';

class CatList extends Component {
    renderList() {
        console.log(this.props.cats);
        return this.props.cats.map((cat) => {
            return (
                <li key={cat.id}
                    className="list-group-item">
                    <div className="img-container"><img src={cat.img} alt="" /></div>
                    <b>{cat.name}</b>
                </li>
            );
        });
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

export default CatList;