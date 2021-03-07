const TableHeader = ({sortColumn, columns, onSort}) => {
  let createKey = (TableColumns) => {
    return TableColumns.path || TableColumns.key;
  };
  let raiserSort = (path) => {
    console.log(path);
    const order = sortColumn.order === "asc" ? "desc" : "asc";
    onSort(path, order);
  };

  let renderSortIcon = (column) => {
    if (column.path !== sortColumn.column)
      return <i className='fa fa-sort'></i>;
    if (sortColumn.order === "asc") {
      return <i className='fa fa-caret-down '></i>;
    } else return <i className='fa fa-caret-up'></i>;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => {
          return (
            <th key={createKey(column)} onClick={() => raiserSort(column.path)}>
              {column.label} {renderSortIcon(column)}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
