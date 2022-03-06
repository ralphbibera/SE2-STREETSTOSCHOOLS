import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../../config/firebase";
import AddRecords from "./AddRecords";
import "../../Stylesheets/table.css";
import { deleteRecord } from "../../../redux/actionCreators/recordActionCreator";

const ManageRecords = () => {
  const { path } = useRouteMatch();

  const record = firestore.collection("records");
  const recordQuery = record.limit(50).orderBy("donation_date", "desc");
  const [recordList] = useCollectionData(recordQuery);

  const createPDF = () => {
    var sTable = document.getElementById("tab").innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 18px Calibri;}";
    style =
      style +
      "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "#hideme {display: none !important;}";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open("", "", "height=700,width=700");

    win.document.write("<html><head>");
    win.document.write("<title>Records</title>"); // <title> FOR PDF HEADER.
    win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write("</head>");
    win.document.write("<body>");
    win.document.write(sTable); // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write("</body></html>");

    win.document.close(); // CLOSE THE CURRENT WINDOW.

    win.print(); // PRINT THE CONTENTS.
  };

  return (
    <div className="">
      <Switch>
        <Route exact path={path}>
          <div className="top-buttons container d-flex justify-content-between">
            <Link to="/admin/dashboard/manage-records/addrecord">
              <button>New Records</button>
            </Link>
            <button onClick={() => createPDF()}>Print Records</button>
          </div>
          <div className="container" id="tab">
            <table>
              <thead>
                <tr>
                  <th>DONATION DATE</th>
                  <th>NAME</th>
                  <th>PLATFORM</th>
                  <th>AMOUNT</th>
                  <th colSpan={2} id="hideme">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              {recordList ? (
                recordList &&
                recordList.map((record, index) => (
                  <tbody key={index} id="table-content">
                    <tr>
                      <td>
                        {new Date(
                          record.donation_date.seconds * 1000
                        ).toLocaleDateString()}
                      </td>
                      <td>{record.donor}</td>
                      <td>{record.platform}</td>
                      <td>{record.amount}</td>
                      <td id="hideme">
                        <button className="action-buttons edit-btn">
                          Edit
                        </button>
                      </td>
                      <td id="hideme">
                        <button
                          className="action-buttons delete-btn"
                          onClick={() => deleteRecord(record.id)}
                        >
                          Delete
                        </button>
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
