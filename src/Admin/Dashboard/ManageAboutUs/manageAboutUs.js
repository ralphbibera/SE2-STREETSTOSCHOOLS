import "../../Stylesheets/table.css";
import logo from "../../../Admin/Assets/logo.png";

const ManageAboutUs = () => {
  return (
    <div>
      <div class="top-space container"></div>
      <div class="container">
        <table>
          <thead>
            <th style={{ "text-align": "center" }}>AWARDS AND RECOGNTIONS</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <textarea id="aboutus-textarea"></textarea>
              </td>
            </tr>
            <tr>
              <td class="d-flex justify-content-end">
                <button class="action-buttons edit-btn">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAboutUs;
