import firebase from "firebase/app";
import "firebase/firestore";

const WishList = ({ rows, deleteWishItem }) => {
  const firestore = firebase.firestore();
  
  return (
    <div>
      <h2>wish list</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>name</th>
            <th>who wants</th>
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
                deleteWishItem(row.id);

                firestore
                  .collection("WishList")
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
              <td>{row.person}</td>
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
export default WishList;
