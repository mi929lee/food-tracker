const BuyList = ({ rows, deleteBuy }) => (
  <div>
    <h2>need to buy</h2>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>name</th>
          <th>date needed by</th>
          <th>qty</th>
          <th>type</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} onClick={() => {deleteBuy(row.name)}}>
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

export default BuyList;
