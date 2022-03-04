import "../../Stylesheets/NavBar.css";
import "../../Stylesheets/table.css";

const ManageArchives = () => {
  return (
    <div>
      <div className="top-space container"></div>
      <div className="container">
        <table>
          <thead>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th colspan={2}>ACTIONS</th>
          </thead>
          <tbody style={{ "font-size": "15px" }} />
          <tr>
            <td>1</td>
            <td>
              <img
                id="post-img"
                src={require("../../Assets/featured_image.png")}
              />
            </td>
            <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
            <td>
              <button className="action-buttons edit-btn">Restore</button>
            </td>
            <td>
              <button className="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img
                id="post-img"
                src={require("../../Assets/featured_image.png")}
              />
            </td>
            <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
            <td>
              <button className="action-buttons edit-btn">Restore</button>
            </td>
            <td>
              <button className="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img
                id="post-img"
                src={require("../../Assets/featured_image.png")}
              />
            </td>
            <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
            <td>
              <button className="action-buttons edit-btn">Restore</button>
            </td>
            <td>
              <button className="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <img
                id="post-img"
                src={require("../../Assets/featured_image.png")}
              />
            </td>
            <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
            <td>
              <button className="action-buttons edit-btn">Restore</button>
            </td>
            <td>
              <button className="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tbody />
        </table>
      </div>
    </div>
  );
};

export default ManageArchives;
