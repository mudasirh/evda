import React, {Component} from "react";
import {getOrdersDetail} from "./services/fakeDBService";
import SideNav from "./components/sideNav";
import TopNav from "./components/topNav";

class App extends Component {
  state = {
    ordersDetail: getOrdersDetail(),
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Expected",
          data: [0, 30, 20, 60, 40, 50, 25],
          borderColor: "#f1bd8e",
          backgroundColor: "rgba(241, 189, 142, 0.5)",
        },
        {
          label: "Current",
          data: [0, 10, 20, 15, 35, 45, 25],
          borderColor: "#bf6159",
          backgroundColor: "rgba(207, 137, 131, 0.5)",
        },
      ],
    },
    categories: [
      {key: 1, label: "cosmetics", total: 45},
      {key: 2, label: "Fashion", total: 21},
      {key: 3, label: "cosmetics", total: 10},
      {key: 4, label: "cosmetics", total: 5},
      {key: 5, label: "cosmetics", total: 5},
    ],
  };

  render() {
    return (
      <>
        <TopNav />
        <SideNav
          chartData={this.state.chartData}
          categories={this.state.categories}
          getCategoriesProgress={this.handleCategoriesProgress}
        />
      </>
    );
  }
}

export default App;
