import React, { Component } from 'react';
import api from '../api';
import TitleBar from './TitleBar';
import CatList from '../containers/CatList';
import CatForm from '../containers/CatForm';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { cats: [] };
  }

  componentDidMount() {
    api.getCats().then(cats => this.setState({ cats }));
  }

  // handleSubmit = (cat) => {
  //   cat.preventDefault();

  //   const { name, img } = cat.target;

  //   api.addCat({
  //     name: name.value,
  //     img: img.value,
  //   })
  //     .then(cats => this.setState({ cats }));
  // };

  render() {
    return (
      <div className="App container">
        <TitleBar />
        <CatList />
        <CatForm />
      </div>
    );
  }
}

export default App;
