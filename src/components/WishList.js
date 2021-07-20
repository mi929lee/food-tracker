const WishList = ({ rows, deleteWishItem }) => (
  <div>
    <h2>wish list</h2>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>name</th>
          <th>who wants</th>
          <th>qty</th>
          <th>type</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx} onClick={() => {deleteWishItem(row.id)}}>
            <td>{row.title}</td>
            <td>{row.person}</td>
            <td>{row.quantity}</td>
            <td>{row.tags}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default WishList;
