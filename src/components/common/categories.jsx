import {ProgressBar} from "react-bootstrap";

const Categories = ({categories}) => {
  let categoriesTotal = [];
  categories.forEach((key) => {
    categoriesTotal.push(key["total"]);
  });
  let categoryMax = Math.max(...categoriesTotal);
  return (
    <div className='bg-white dashboard-categories'>
      <h5>Top categories</h5>
      <p>By Order</p>
      <ul className='list-unstyled'>
        {categories.map((c) => {
          return (
            <li key={c.key} className='list-item my-3'>
              <span className='text-start'>{c.label}</span>
              <span className='float-end'>{c.total}</span>
              <ProgressBar
                variant='secondary'
                now={(c.total / categoryMax) * 100}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
