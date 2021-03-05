import React, {Component} from "react";
import {getOrdersDetail} from "./services/fakeDBService";
import SideNav from "./components/sideNav";
import TopNav from "./components/topNav";

class App extends Component {
  state = {
    ordersDetail: getOrdersDetail(),
  };

  render() {
    return (
      <>
        <TopNav />
        <SideNav />
      </>
    );
  }
}

export default App;
