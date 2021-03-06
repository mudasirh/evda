const Card = ({cards}) => {
  return (
    <div className='row align-items-start g-3 my-3'>
      {cards.map((card) => {
        return (
          <div key={card.heading} className='col-lg-3 col-md-6 col-sm-12'>
            <div className='container bg-white dashboard-card'>
              <div className='dashboard-card-heading'>
                <div className='row'>
                  <div className='col-12'>
                    <span className='card-heading'>{card.heading}</span>
                  </div>
                </div>
              </div>
              <div className='dashboard-card-body'>
                <div className='row align-items-center '>
                  <div className='col-6'>
                    <img src={card.icon} alt='' />
                  </div>
                  <div className='col-6 text-end'>
                    <span className='card-body-text'>{card.total}</span>
                    <span className='d-block'>Total</span>
                  </div>
                </div>
              </div>

              <hr className='dashboard-card-divider' />
              <div className='dashboard-card-footer'>
                <div className='row'>
                  {card.status.map((s) => {
                    return (
                      <div key={s.key} className='col-4'>
                        <div>
                          <span>{s.value}</span>
                          <span className='d-block card-footer-text'>
                            {s.label}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
