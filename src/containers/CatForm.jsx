import React, { Component } from 'react';
import './CatForm.css';

class CatForm extends Component {
    handleSubmit = (cat) => {
        console.log("Submit Cat!");
        // cat.preventDefault();

        // const { name, img } = cat.target;

        // api.addCat({
        //     name: name.value,
        //     img: img.value,
        // }).then(cats => this.setState({ cats }));
    };

    render(){
        return (
            <div className="CatForm">
                <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Add a Cat</legend>
                    <div className="form-group">
                        <label htmlFor="name"><b>Name</b></label>
                        <input className="form-control" name="name" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="img"><b>Url to Image</b></label>
                        <input className="form-control" name="img" id="img" />
                    </div>
                    <div>
                        <button type="button" className="btn btn-primary">Add Cat</button>
                    </div>
                </fieldset>
                </form>
            </div>
        );
    }
}

export default CatForm;