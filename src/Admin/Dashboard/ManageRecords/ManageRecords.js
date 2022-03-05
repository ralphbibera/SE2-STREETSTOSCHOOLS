import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../../config/firebase";
import AddRecords from "./AddRecords";
import { Button } from "react-bootstrap";
import "../../Stylesheets/table.css";

const ManageRecords = () => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const record = firestore.collection("records");
  const recordQuery = record.limit(50).orderBy("date", "asc");
  const [recordList] = useCollectionData(recordQuery);

  return (
    <div className="">
      <Switch>
        <Route exact path={path}>
          <div className="top-buttons container d-flex justify-content-between">
            <Link to="/admin/dashboard/manage-records/addrecord">
              <button>New Records</button>
            </Link>
            <button>Print Records</button>
          </div>
          <div className="container">
            <table>
              <thead>
                <tr>
                  <th>DONATION DATE</th>
                  <th>NAME</th>
                  <th>PLATFORM</th>
                  <th>AMOUNT</th>
                  <th colSpan={2}>ACTIONS</th>
                </tr>
              </thead>
              {recordList ? (
                recordList &&
                recordList.map((record,index) => (
                  <tbody>
                    <tr key={index}>
                      <td>{record.donation_date}</td>
                      <td>{record.donor}</td>
                      <td>{record.platform}</td>
                      <td>{record.amount}</td>
                      <td>
                        <Button className="action-buttons edit-btn">
                          Edit
                        </Button>
                      </td>
                      <td>
                        <Button className="action-buttons delete-btn">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <>Loading</>
              )}
            </table>
          </div>
        </Route>
        <Route path={path + "/addrecord"}>
          <AddRecords />
        </Route>
      </Switch>
    </div>
  );
};

export default ManageRecords;
