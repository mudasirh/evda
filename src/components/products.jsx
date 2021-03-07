import React, {Component} from "react";

class Products extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Products</h1>
        <small>{`Home > Products`}</small>
        <div className='p-3 bg-white products'>
          <div className='card '>
            <ul class='nav nav-pills ' id='pills-tab'>
              <li class='nav-item'>
                <button
                  class='nav-link active'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                >
                  Products
                </button>
              </li>
              <li class='nav-item'>
                <button
                  class='nav-link'
                  id='pills-profile-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-profile'
                  type='button'
                >
                  Categories
                </button>
              </li>
              <li class='nav-item'>
                <button
                  class='nav-link'
                  id='pills-contact-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-contact'
                  type='button'
                >
                  Brands
                </button>
              </li>
            </ul>
            <hr />
            {/*  */}
            <div className='products-header d-flex justify-content-between align-items-center'>
              <div className='p-3'>
                <div class='dropdown mx-2'>
                  <button
                    class='btn btn-secondary dropdown-toggle'
                    type='button'
                    id='dropdownMenu2'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Filter
                  </button>
                  <ul class='dropdown-menu'>
                    <li>
                      <button class='dropdown-item' type='button'>
                        Action
                      </button>
                    </li>
                    <li>
                      <button class='dropdown-item' type='button'>
                        Another action
                      </button>
                    </li>
                    <li>
                      <button class='dropdown-item' type='button'>
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <ul className='list-inline'>
                  <li className='list-inline-item'>
                    <img
                      src='assets/img/icons/Products Page- Print.svg'
                      alt=''
                    />
                  </li>
                  <li className='list-inline-item'>
                    <img
                      src='assets/img/icons/Products Page - Delete.svg'
                      alt=''
                    />
                  </li>
                  <li className='list-inline-item'>
                    <div className='input'>
                      <img src='assets/img/icons/search.svg' alt='' />
                      <i className='fa fa-search'></i>
                      <input type='text' placeholder='Search...' />
                    </div>
                  </li>
                  <li className='list-inline-item'>
                    <button className='btn btn-secondary btn-md'>
                      Add Products
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div class='tab-content' id='pills-tabContent'>
              <div class='tab-pane fade show active' id='pills-home'>
                Products
              </div>
              <div class='tab-pane fade' id='pills-profile'>
                Categories
              </div>
              <div class='tab-pane fade' id='pills-contact'>
                Brands
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
