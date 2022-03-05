import "../../Stylesheets/NavBar.css";
import "../../Stylesheets/table.css";

const ManageFeatured = () => {
  return (
    <div>
      <div className="top-space container"></div>
      <div className="container">
        <h1 style={{ "font-size": "25px", "font-weight": "bold" }}>
          FEATURED POST
        </h1>
        <table>
          <thead>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th colspan="2">ACTIONS</th>
          </thead>
          <tbody style={{ "font-size": "15px" }} />
          <tr>
            <td>1</td>
            <td>
              <img
                id="featured-img"
                src={require("../../Assets/featured_image.png")}
              />
            </td>
            <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
            <td>
              <button className="action-buttons edit-btn">Edit</button>
            </td>
            <td>
              <button className="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
        </table>

        <h1 style={{ "font-size": "25px", "font-weight": "bold" }}>
          SUBFEATURED POST
        </h1>
        <table>
          <thead>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th colspan="2">ACTIONS</th>
          </thead>
          <tbody style={{ "font-size": "15px" }} />
          <tr>
            <td>1</td>
            <td>
              <img
                id="subfeatured-img"
                src={require("../../Assets/featured_image.png")}
              />
            </td>
            <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
            <td>
              <button className="action-buttons edit-btn">Edit</button>
            </td>
            <td>
              <button className="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img
                id="subfeatured-img"
                src={require("../../Assets/featured_image.png")}
              />
            </td>
            <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
            <td>
              <button className="action-buttons edit-btn">Edit</button>
            </td>
            <td>
              <button className="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img
                id="subfeatured-img"
                src={require("../../Assets/featured_image.png")}
              />
            </td>
            <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
            <td>
              <button className="action-buttons edit-btn">Edit</button>
            </td>
            <td>
              <button className="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ManageFeatured;
