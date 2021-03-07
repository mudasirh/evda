import React, {Component} from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Pagination from "./common/pagination";
import Paginate from "../utils/paginate";
import _ from "lodash";

class OrderTable extends Component {
  state = {
    currentPage: 1,
    pageSize: 4,
    sortColumn: {column: "", order: "desc"},
    PaginationInput: "",
  };
  componentDidMount() {
    this.setState({PaginationInput: this.state.pageSize});
  }

  TableColumns = [
    {key: "orderId", path: "orderId", label: "Order ID"},
    {key: "name", path: "name", label: "Customer"},
    {key: "address", path: "address", label: "Delivery Address"},
    {key: "status", path: "status", label: "Status"},
    {key: "date", path: "date", label: "date"},
    {key: "shipping", path: "shipping", label: "Shipping"},
    {key: "total", path: "total", label: "Total"},
    {key: "subtotal", path: "subTotal", label: "Sub Total"},
    {
      key: "action",
      label: "Action",
      content: <img src='assets/img/icons/Dashboard-Actions.svg' alt='' />,
    },
  ];

  handleSort = (column, order) => {
    this.setState({sortColumn: {column, order}});
  };

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
      Math.ceil(this.props.orders.length / this.state.pageSize)
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

  // This method filter order table data according to the sorted value and page size.
  filteredOrders = () => {
    const {orders} = this.props;
    const {pageSize, currentPage} = this.state;

    const sortedUsers =
      this.state.sortColumn.column !== ""
        ? _.orderBy(
            orders,
            [this.state.sortColumn.column],
            this.state.sortColumn.order
          )
        : orders;

    const paginatedUsers = Paginate(sortedUsers, currentPage, pageSize);
    return {data: paginatedUsers};
  };

  render() {
    const {currentPage, pageSize} = this.state;
    const {length} = this.props.orders;

    const {data} = this.filteredOrders();
    return (
      <div className='dashboard-orders my-3 bg-white'>
        <div className='card border-0'>
          <div className='card-header bg-white border-0'>
            <div className='row'>
              <div className='col'>
                <h4 className='mb-0'>New Orders</h4>
              </div>
            </div>
          </div>
          <div className='table-responsive p-4 dashboard-orders-table'>
            <table className='table align-items-center'>
              <TableHeader
                columns={this.TableColumns}
                sortColumn={this.state.sortColumn}
                onSort={this.handleSort}
              />
              <TableBody orders={data} TableColumns={this.TableColumns} />
            </table>
            <hr />
            <div className='order-table-pagination'>
              <Pagination
                pageSize={pageSize}
                length={length}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
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

export default OrderTable;
