const OwnedList = ({ rows, deleteOwned }) => (
  <div>
    <h2>owned</h2>
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
          <tr key={idx} onClick={() => {deleteOwned(row.name)}}>
            <td>{row.name}</td>
            <td>{row.expiration}</td>
            <td>{row.qty}</td>
            <td>{row.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default OwnedList;
