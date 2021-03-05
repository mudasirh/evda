import Card from "./common/card";
const Dashboard = () => {
  let card = [{heading: "Orders", icon: ""}];
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <Card />
        </div>
        <div className='col-3'>Products</div>
        <div className='col-3'>Customers</div>
        <div className='col-3'>Visitors</div>
      </div>
      <div className='row'>
        <div className='col-9'>chart</div>
        <div className='col-3'>Top categories</div>
      </div>
    </div>
  );
};

export default Dashboard;
