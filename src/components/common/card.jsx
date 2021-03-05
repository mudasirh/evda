const Card = (props) => {
  return (
    <div className='container bg-white dashboard-card'>
      <div className='row'>
        <div className='col-12'>orders</div>
      </div>
      <div className='row'>
        <div className='col-6'>img</div>
        <div className='col-6'>103 Total</div>
      </div>
      <div className='row'>
        <div className='col-4'>new</div>
        <div className='col-4'>2</div>
        <div className='col-4'>0</div>
      </div>
    </div>
  );
};

export default Card;
