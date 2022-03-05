
const ManageDonation = () => {
  return (
    <div>
      <div class="container top-space"></div>
      <div class="container">
        <table>
          <thead>
            <th>CATEGORY</th>
            <th>LINK</th>
            <th>ACTIONS</th>
          </thead>
          <tbody>
            <tr>
              <td>GCASH</td>
              <td>https://bit.ly/gforms.com</td>
              <td>
                <button class="action-buttons edit-btn">Edit</button>
              </td>
            </tr>
            <tr>
              <td>BPI</td>
              <td>https://bit.ly/gforms.com</td>
              <td>
                <button class="action-buttons edit-btn">Edit</button>
              </td>
            </tr>
            <tr>
              <td>BPO</td>
              <td>https://bit.ly/gforms.com</td>
              <td>
                <button class="action-buttons edit-btn">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDonation;
