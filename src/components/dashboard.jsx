import Card from "./common/card";
import Chart from "./common/chart";
import Categories from "./common/categories";
import OrderTable from "./orderTable";

const Dashboard = ({chartData, categories, orders, sortColumn, onSort}) => {
  let cards = [
    {
      heading: "Orders",
      icon: "assets/img/icons/Dashboard-Orders.svg",
      total: 103,
      status: [
        {label: "New", value: 15, key: 1},
        {label: "Returned", value: 15, key: 2},
        {label: "Canceled", value: 15, key: 3},
      ],
    },
    {
      heading: "Products",
      icon: "assets/img/icons/Dashboard-Products.svg",
      total: 103,
      status: [
        {label: "Sold", value: 15, key: 1},
        {label: "Out of Stock", value: 15, key: 2},
      ],
    },
    {
      heading: "Customers",
      icon: "assets/img/icons/Dashboard- Customers.svg",
      total: 103,
      status: [
        {label: "New", value: 15, key: 1},
        {label: "Returning", value: 15, key: 2},
      ],
    },
    {
      heading: "Visitors",
      icon: "assets/img/icons/Dashboard-Visitors.svg",
      total: 103,
      status: [
        {label: "Desktop", value: 15, key: 1},
        {label: "Tablet", value: 15, key: 2},
        {label: "Mobile", value: 15, key: 3},
      ],
    },
  ];

  return (
    <div className='container'>
      <Card cards={cards} />

      <div className='row g-3 '>
        <div className='col-lg-9 col-sm-12'>
          <Chart chartData={chartData} />
        </div>
        <div className='col-lg-3 col-sm-12'>
          <Categories categories={categories} />
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <OrderTable orders={orders} sortColumn={sortColumn} onSort={onSort} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
