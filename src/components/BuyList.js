const BuyList = ({ rows, deleteBuy }) => (
  <div>
    <h2 className="is-size-3 has-text-weight-semibold">need to buy</h2>
    <table className="table is-hoverable">
      <thead>
        <tr>
          <th>name</th>
          <th>expiration</th>
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
