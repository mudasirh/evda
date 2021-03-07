const AddOrder = () => {
  return (
    <div>
      <h1>Add Order</h1>
      <small>{`Home > Orders > Add Orders`}</small>
      <div className='add-order bg-white p-3'>
        <div className='card border-0'>
          <h6>Order Detail</h6>
          {/* Stepper */}
          <div className='w-100 stepper'>
            <ul className='list-inline d-flex justify-content-between mx-5 '>
              <li className='list-inline-item'>
                <div className='step '>
                  <i className='fa fa-check text-center align-middle'></i>
                </div>
                <span className='step-name align-middle'>
                  <img
                    src='assets/img/icons/Order page - Customer Stepper.svg'
                    alt=''
                  />
                  Customer 1
                </span>
              </li>
              <li className='list-inline-item'>
                <div className='step '>
                  <i className='fa fa-check text-center align-middle'></i>
                </div>
                <span className='step-name align-middle'>
                  <img
                    src='assets/img/icons/Order page - Customer Stepper.svg'
                    alt=''
                  />
                  Customer 2
                </span>
              </li>
              <li className='list-inline-item'>
                <div className='step selected-step'>
                  <i className='fa fa-book text-center align-middle'></i>
                </div>
                <span className='step-name align-middle'>
                  <img
                    src='assets/img/icons/Order page - Customer Stepper.svg'
                    alt=''
                  />
                  Customer 3
                </span>
              </li>
              <li className='list-inline-item'>
                <div className='step  '>
                  <i className='fa fa-check text-center align-middle'></i>
                </div>
                <span className='step-name text-end'>
                  <img
                    src='assets/img/icons/Order page - Customer Stepper.svg'
                    alt=''
                  />
                  Customer 4
                </span>
              </li>
            </ul>
          </div>
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
            {/* selected item */}
            <div className='mx-3 selected'>
              <h6>Selected Items</h6>
              <table className='selectedItems'>
                <tbody>
                  <tr>
                    <td rowSpan='3'>
                      <img
                        src='assets/img/icons/Order page - Image.svg'
                        alt=''
                      />
                    </td>
                    <td>Name</td>
                    <td colSpan='2' className='float-end'>
                      <img
                        src='assets/img/icons/Order page - remove.svg'
                        alt=''
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td colSpan='2'>Price SAR. 999</td>
                  </tr>
                  <tr>
                    <td colSpan='3' className='float-end quantity'>
                      <button className='btn btn-secondary'>+</button>1
                      <button className='btn btn-secondary'>-</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='4'>
                      {" "}
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
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <table className='selectedItems'>
                <tbody>
                  <tr>
                    <td rowSpan='3'>
                      <img
                        src='assets/img/icons/Order page - Image.svg'
                        alt=''
                      />
                    </td>
                    <td>Name</td>
                    <td colSpan='2' className='float-end'>
                      <img
                        src='assets/img/icons/Order page - remove.svg'
                        alt=''
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td colSpan='2'>Price SAR. 999</td>
                  </tr>
                  <tr>
                    <td colSpan='3' className='float-end quantity'>
                      <button className='btn btn-secondary'>+</button>1
                      <button className='btn btn-secondary'>-</button>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan='4'>
                      {" "}
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
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='my-5'>
                <span className='float-end'>Total Price: 1000</span>
                <br />
                <br />
                <ul className='list-inline float-end'>
                  <li className='list-inline-item'>
                    <button className='btn btn-outline-dark'>Cancel</button>
                  </li>
                  <button className='btn btn-outline-secondary'>
                    Previous
                  </button>
                  <li className='list-inline-item'></li>
                  <button className='btn btn-secondary'>Next Step</button>
                  <li className='list-inline-item'></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
