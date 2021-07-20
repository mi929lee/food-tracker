const InventoryList = ({ rows, deleteInventoryItem }) => (
  <div>
    <h2>inventory</h2>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>name</th>
          <th>expiration date</th>
          <th>qty</th>
          <th>type</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} onClick={() => {deleteInventoryItem(row.name)}}>
            <td>{row.title}</td>
            <td>{row.date}</td>
            <td>{row.quantity}</td>
            <td>{row.tags}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default InventoryList;
