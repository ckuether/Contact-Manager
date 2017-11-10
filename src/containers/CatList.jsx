import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from '../actions';
import './CatList.css';

class CatList extends Component {

    componentDidMount() {
        this.props.fetchCats()
    }

    renderList() {
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
        if(this.props.catsIsLoading){
            return <p>Loading...</p>;
        }

        if(this.props.catsHasErrored){
            return <p>Sorry! We are unable to find the cats right now</p>;
        }

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
        cats: state.cats,
        catsIsLoading: state.catsIsLoading,
        catsHasErrored: state.catsHasErrored
    };
}


//Takes function and component and creates state container
export default connect(mapStateToProps, { fetchCats })(CatList);