/* eslint-disable jsx-a11y/anchor-is-valid */
const TopNav = () => {
  return (
    <nav className='navbar navbar-expand bg-white container-topNav'>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item lang'>
          <div className='dropdown '>
            <a
              className='nav-link '
              href='#'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
            >
              <span>ENG</span> <i className='fa fa-angle-down'></i>
            </a>
            <ul className='dropdown-menu dropdown-menu-end'>
              <li>
                <a className='dropdown-item' href='#'>
                  ENG
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  ARB
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <img src='assets/img/icons/Header-Notification.svg' alt='' />
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            <img
              src='assets/img/icons/Header-User.svg'
              alt=''
              style={{width: "23px"}}
            />
            <span>George K</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
