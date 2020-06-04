import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Filter from './Filter'
import hogs from "../porkers_data";
import HogsBrowser from "./HogsBrowser";

class App extends Component {

  constructor() {
    super()

    this.state = {
      hogs: hogs,
      filters: {
        toggled: false
      },
      sorts: {
        type: 'name'
      }
    }
  }

  onChangeSortType = (event) => {
    this.setState({
      sorts: {
        type: event.target.value
      }
    })
  }

  onChangeFilter = (event) => {
    this.setState({
      filters: {
        toggled: event.target.checked
      }
    })
  }

  onClickHiddenHogs = (event) => {
    console.log('hides hogs')
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter 
          onChangeSortType={this.onChangeSortType}
          sortType={this.state.sorts.type}
          onChangeFilter={this.onChangeFilter}
          isChecked={this.state.filters.toggled}
          onClickHiddenHogs={this.onClickHiddenHogs}
        />
        <HogsBrowser
          hogs={this.state.hogs}
        />
      </div>
    );
  }
}

export default App;
