import firebase from "firebase/app";
import "firebase/firestore";

const InventoryList = ({ rows, deleteInventoryItem }) => {
  const firestore = firebase.firestore();

  return (
    <div>
      <h2>inventory</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>name</th>
            <th>expiration date</th>
            <th>qty</th>
            <th>type</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              onClick={() => {
                deleteInventoryItem(row.id);

                firestore
                  .collection("InventoryList")
                  .doc(row.id)
                  .delete()
                  .then(() => {
                    console.log("document successfully deleted!");
                  })
                  .catch((error) => {
                    console.error("error removing document", error);
                  });
              }}
            >
              <td>{row.title}</td>
              <td>{row.date}</td>
              <td>{row.quantity}</td>
              <td>{row.tags}</td>
              <td>{row.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryList;
