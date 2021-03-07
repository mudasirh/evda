const AddOrder = () => {
  return (
    <div>
      <h1>Add Order</h1>
      <small>{`Home > Orders > Add Orders`}</small>
      <div className='add-order bg-white p-3'>
        <div className='card border-0'>
          <h6>Order Detail</h6>
          <h6>Select Items </h6>

          <div className='d-flex  w-100'>
            <div className='flex-fill p-1 select-items'>
              <div className='input mx-4 my-3'>
                <i className='fa fa-search'></i>
                <input type='text' placeholder='Search...' />
              </div>
              <div>
                <div className='table-responsive'>
                  <table className='table '>
                    <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='text'>
                        <td>
                          <input type='checkbox' />
                        </td>
                        <td>
                          <img
                            src='assets/img/icons/Order page - Image.svg'
                            alt=''
                          />
                        </td>
                        <td>Name</td>
                        <td>Brand</td>
                        <td>Price</td>
                      </tr>
                      <tr className='text'>
                        <td>
                          <input type='checkbox' />
                        </td>
                        <td>
                          <img
                            src='assets/img/icons/Order page - Image.svg'
                            alt=''
                          />
                        </td>
                        <td>Name</td>
                        <td>Brand</td>
                        <td>Price</td>
                      </tr>
                      <tr className='text'>
                        <td>
                          <input type='checkbox' />
                        </td>
                        <td>
                          <img
                            src='assets/img/icons/Order page - Image.svg'
                            alt=''
                          />
                        </td>
                        <td>Name</td>
                        <td>Brand</td>
                        <td>Price</td>
                      </tr>
                      <tr className='text'>
                        <td>
                          <input type='checkbox' />
                        </td>
                        <td>
                          <img
                            src='assets/img/icons/Order page - Image.svg'
                            alt=''
                          />
                        </td>
                        <td>Name</td>
                        <td>Brand</td>
                        <td>Price</td>
                      </tr>
                      <tr className='text'>
                        <td>
                          <input type='checkbox' />
                        </td>
                        <td>
                          <img
                            src='assets/img/icons/Order page - Image.svg'
                            alt=''
                          />
                        </td>
                        <td>Name</td>
                        <td>Brand</td>
                        <td>Price</td>
                      </tr>
                      <tr className='text'>
                        <td>
                          <input type='checkbox' />
                        </td>
                        <td>
                          <img
                            src='assets/img/icons/Order page - Image.svg'
                            alt=''
                          />
                        </td>
                        <td>Name</td>
                        <td>Brand</td>
                        <td>Price</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='flex-fill p-2 selectedItems'>
              <h6>Selected Items</h6>

              <div className='d-inline-block'>
                <img src='assets/img/icons/Order page - Image.svg' alt='' />
              </div>
              <div className='d-inline-block float-end'>
                <span>Name</span>
                <span>
                  <img src='assets/img/icons/Order page - remove.svg' alt='' />
                </span>
              </div>
              <div>
                Color:
                <select className='mx-3' name='color'>
                  <option value=''>Navy Blue</option>
                </select>
                Size:
                <select className='mx-3' name='size'>
                  <option value=''>12.22mm</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
