import "../../Stylesheets/table.css";

const ManageComments = () => {
  return (
    <div>
      <div class="top-space container"></div>
      <div class="container">
        <table>
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>RESPONSE</th>
            <th>DATE</th>
            <th>ACTIONS</th>
          </thead>
          <tbody style={{ "font-size": "15px" }} />
          <tr>
            <td>1</td>
            <td>Mark Allen Cruz</td>
            <td>mariaeme@gmail.com</td>
            <td>happy wife, happy life</td>
            <td>May 12, 2021</td>
            <td>
              <button class="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mark Allen Cruz</td>
            <td>mariaeme@gmail.com</td>
            <td>happy wife, happy life</td>
            <td>May 12, 2021</td>
            <td>
              <button class="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mark Allen Cruz</td>
            <td>mariaeme@gmail.com</td>
            <td>happy wife, happy life</td>
            <td>May 12, 2021</td>
            <td>
              <button class="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mark Allen Cruz</td>
            <td>mariaeme@gmail.com</td>
            <td>happy wife, happy life</td>
            <td>May 12, 2021</td>
            <td>
              <button class="action-buttons delete-btn">Delete</button>
            </td>
          </tr>
          <tbody />
        </table>
      </div>
    </div>
  );
};

export default ManageComments;
