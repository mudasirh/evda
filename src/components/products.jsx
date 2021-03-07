import React, {Component} from "react";
import ProductCard from "./common/productCard";
import {getProducts} from "../services/fakeDBService";
import Pagination from "./common/pagination";
import Paginate from "../utils/paginate";

class Products extends Component {
  state = {
    products: getProducts(),
    currentPage: 1,
    pageSize: 18,
    PaginationInput: "",
  };

  componentDidMount() {
    this.setState({PaginationInput: this.state.pageSize});
  }

  // Pagination

  handlePageChange = (page) => {
    this.setState({currentPage: page});
  };
  handlePrevious = () => {
    if (this.state.currentPage !== 1) {
      let currentPage = this.state.currentPage;
      this.setState({currentPage: --currentPage});
    }
  };
  handleNext = () => {
    if (
      this.state.currentPage !==
      Math.ceil(this.state.products.length / this.state.pageSize)
    ) {
      let currentPage = this.state.currentPage;
      this.setState({currentPage: ++currentPage});
    }
  };
  handlePaginationInputChange = ({currentTarget}) => {
    if (!isNaN(currentTarget.value) && currentTarget.value < 100) {
      this.setState({PaginationInput: currentTarget.value}, () => {
        if (this.state.PaginationInput > 0 && currentTarget.value !== "") {
          this.setState({pageSize: this.state.PaginationInput});
        }
      });
    }
  };

  // filtered products

  // This method filter order table data according to the sorted value and page size.
  filteredOrders = () => {
    const {products} = this.state;
    const {pageSize, currentPage} = this.state;
    const paginatedUsers = Paginate(products, currentPage, pageSize);
    return {data: paginatedUsers};
  };

  render() {
    const {data} = this.filteredOrders();
    return (
      <div>
        <h1>Products</h1>
        <small>{`Home > Products`}</small>
        <div className='p-3 bg-white products'>
          <div className='card '>
            <ul className='nav nav-pills ' id='pills-tab'>
              <li className='nav-item'>
                <button
                  className='nav-link active'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                >
                  Products
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className='nav-link'
                  id='pills-profile-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-profile'
                  type='button'
                >
                  Categories
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className='nav-link'
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
                <div className='dropdown mx-2'>
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    id='dropdownMenu2'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Filter
                  </button>
                  <ul className='dropdown-menu'>
                    <li>
                      <button className='dropdown-item' type='button'>
                        Action
                      </button>
                    </li>
                    <li>
                      <button className='dropdown-item' type='button'>
                        Another action
                      </button>
                    </li>
                    <li>
                      <button className='dropdown-item' type='button'>
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
            <div className='tab-content' id='pills-tabContent'>
              <div className='tab-pane fade show active' id='pills-home'>
                <ProductCard products={data} />
              </div>
              <div className='tab-pane fade' id='pills-profile'>
                Categories
              </div>
              <div className='tab-pane fade' id='pills-contact'>
                Brands
              </div>
            </div>
            <div className='order-table-pagination'>
              <Pagination
                pageSize={this.state.pageSize}
                length={this.state.products.length}
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
                currentLength={data.length}
                onPrevious={this.handlePrevious}
                onNext={this.handleNext}
                onPaginationInputChange={this.handlePaginationInputChange}
                PaginationInput={this.state.PaginationInput}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
