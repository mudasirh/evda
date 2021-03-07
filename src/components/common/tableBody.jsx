const TableBody = ({orders, TableColumns}) => {
  return (
    <>
      <tbody>
        {orders.map((order) => {
          return (
            <tr key={order._id}>
              {TableColumns.map((c) => {
                return <td key={c.key}> {order[c.path] || c.content}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default TableBody;
