import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps(state){
    //Whatever is returned will show up as props
    return {
        cats: state.cats
    };
}


//Takes function and component and creates state container
export default connect(mapStateToProps)(CatList);