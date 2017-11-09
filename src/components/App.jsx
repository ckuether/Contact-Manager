import React, { Component } from 'react';
import api from '../api';
import TitleBar from './TitleBar';
import CatList from './CatList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { cats: [] };
  }

  componentDidMount() {
    api.getCats().then(cats => this.setState({ cats }));
  }

  handleSubmit = (cat) => {
    cat.preventDefault();

    const { name, img } = cat.target;

    api.addCat({
      name: name.value,
      img: img.value,
    })
      .then(cats => this.setState({ cats }));
  };

  render() {
    return (
      <div className="App container">
        <TitleBar />
        <CatList cats={this.state.cats} />
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Add a Cat</legend>
            <ul>
              <li>
                <label htmlFor="name">Name</label>
                <input name="name" id="name" />
              </li>
              <li>
                <label htmlFor="img">Url to Image</label>
                <input name="img" id="img" />
              </li>
              <li>
                <button>Add Cat</button>
              </li>
            </ul>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
