import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../../config/firebase";
import AddRecords from "./AddRecords";
import ManageDonation from "../ManageDonation/ManageDonation";

const ManageRecords = () => {
  const { path } = useRouteMatch();
  const history = useHistory();

  return (
    <div class="">
      <Switch>
        <Route exact path={path}>
          <div class="top-buttons container d-flex justify-content-between">
            <Link to="/admin/dashboard/manage-records/addrecord">
              <button>New Records</button>
            </Link>
            <button>Print Records</button>
          </div>
          <div class="container">
            <table>
              <thead>
                <th>DONATION DATE</th>
                <th>NAME</th>
                <th>PLATFORM</th>
                <th>AMOUNT</th>
                <th colspan="2">ACTIONS</th>
              </thead>
              <tbody>
                <tr>
                  <td>Jan 25, 2022</td>
                  <td>Mark Allen Cruz</td>
                  <td>BPI</td>
                  <td>15000 PHP</td>
                  <td>
                    <button class="action-buttons edit-btn">Edit</button>
                  </td>
                  <td>
                    <button class="action-buttons delete-btn">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Jan 25, 2022</td>
                  <td>Mark Allen Cruz</td>
                  <td>BPI</td>
                  <td>15000 PHP</td>
                  <td>
                    <button class="action-buttons edit-btn">Edit</button>
                  </td>
                  <td>
                    <button class="action-buttons delete-btn">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Jan 25, 2022</td>
                  <td>Mark Allen Cruz</td>
                  <td>BPI</td>
                  <td>15000 PHP</td>
                  <td>
                    <button class="action-buttons edit-btn">Edit</button>
                  </td>
                  <td>
                    <button class="action-buttons delete-btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Route>
        <Route path={path + "/addrecord"}>
            <AddRecords/>
        </Route>
      </Switch>
    </div>
  );
};

export default ManageRecords;
