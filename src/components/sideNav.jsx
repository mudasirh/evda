import Products from "./products";
import Dashboard from "./dashboard";

const SideNav = ({chartData, orders, categories, sortColumn}) => {
  return (
    <main className='container-fluid p-0'>
      <div className='d-flex align-items-start'>
        <div
          className='nav flex-column nav-pills me-3 container-sideNav bg-white'
          id='v-pills-tab'
        >
          <div className='navbar-brand text-center' href='#'>
            <img src='/assets/img/brand/ADVA-Logo.svg' alt='' />
          </div>
          <hr />
          <a
            className='nav-link active'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-home'
          >
            <div>
              <img src='/assets/img/icons/Nav-Home.svg' alt='' />
              <span>Home</span>
            </div>
          </a>
          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-orders'
          >
            <div>
              <img src='/assets/img/icons/Nav-Orders.svg' alt='' />

              <span>Orders</span>
            </div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-products'
          >
            <div>
              <img src='/assets/img/icons/Nav-Products.svg' alt='' />

              <span>Products</span>
            </div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-customers'
          >
            <div>
              <img src='/assets/img/icons/Nav-Customers.svg' alt='' />

              <span>Customers</span>
            </div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-staff'
          >
            <div>
              <img src='/assets/img/icons/Nav-Staff.svg' alt='' />

              <span>Staff</span>
            </div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-marketing'
          >
            <div>
              <img src='/assets/img/icons/Nav-Marketing.svg' alt='' />

              <span>Marketing</span>
            </div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-messages'
          >
            <div>
              <img src='/assets/img/icons/Nav-Messages.svg' alt='' />

              <span>Messages</span>
            </div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-media-manager'
          >
            <div>
              <img src='/assets/img/icons/Nav-Media Manager.svg' alt='' />

              <span>Media Manager</span>
            </div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-chat-bot'
          >
            <div>
              <img src='/assets/img/icons/Nav-Chatbot.svg' alt='' />

              <span>Chat Bot</span>
            </div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-reports'
          >
            <div>
              <img src='/assets/img/icons/Nav-Reports.svg' alt='' />

              <span>Reports</span>
            </div>
          </a>

          <a
            className='nav-link'
            id='v-pills-profile-tab'
            data-bs-toggle='pill'
            href='#v-pills-settings'
          >
            <div>
              <img src='/assets/img/icons/Nav-Settings.svg' alt='' />

              <span>Settings</span>
            </div>
          </a>
        </div>

        {/* Content */}
        <div className='tab-content sideNav-content' id='v-pills-tabContent'>
          {/* Dashboard */}
          <div className='tab-pane fade show active' id='v-pills-home'>
            <Dashboard
              chartData={chartData}
              categories={categories}
              orders={orders}
              sortColumn={sortColumn}
            />
          </div>

          {/* orders */}
          <div className='tab-pane fade' id='v-pills-orders'>
            orders
          </div>
          <div className='tab-pane' id='v-pills-products'>
            <Products />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SideNav;
