const TableBody = ({orders, TableColumns}) => {
  return (
    <>
      <tbody>
        {orders.map((order) => {
          return (
            <tr key={order._id}>
              {TableColumns.map((c) => {
                return c.path === "status" ? (
                  <td key={c.key}>
                    <span
                      className={
                        order[c.path] === "processing"
                          ? "processing"
                          : "delivering"
                      }
                    >
                      {order[c.path] || c.content}
                    </span>
                  </td>
                ) : (
                  <td key={c.key}> {order[c.path] || c.content}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </>
  );
};

export default TableBody;
