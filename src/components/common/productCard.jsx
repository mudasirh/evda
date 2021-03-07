const ProductCard = ({products}) => {
  return (
    <div className='product-card'>
      <div className='row g-3'>
        {products.map((p) => {
          return (
            <div className='col-2'>
              <div className='card p-2'>
                <div className='d-flex justify-content-between align-items-center action'>
                  <div>
                    <input
                      className='form-check-input m-0'
                      type='checkbox'
                      value=''
                    />
                  </div>
                  <div class='dropdown'>
                    <img
                      src='assets/img/icons/Dashboard-Actions.svg'
                      alt=''
                      data-bs-toggle='dropdown'
                    />
                    <ul class='dropdown-menu m-2'>
                      <li>
                        <a class='dropdown-item' href='#'>
                          Product Stats
                        </a>
                      </li>
                      <li>
                        <a class='dropdown-item' href='#'>
                          Review Product orders
                        </a>
                      </li>
                      <li>
                        <a class='dropdown-item' href='#'>
                          Delete Product
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <img
                  src='assets/img/icons/Products Page - Product image.svg'
                  className='card-img-top product-img'
                  alt='...'
                />
                <div className='card-body p-0'>
                  <h5 className='card-title'>Name</h5>
                  <p className='card-text '>
                    <span>Category : cosmetics</span> <br />
                    <span>Brand: Cosmetics</span>
                  </p>
                  <p className='card-text float-end'>
                    <small>Stock: 55</small> <br />
                    <span>Price: SAR 1233</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
