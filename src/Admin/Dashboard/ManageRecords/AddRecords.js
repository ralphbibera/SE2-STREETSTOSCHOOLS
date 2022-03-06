import { Button, Col, Form, ProgressBar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";
import { doRecord } from "../../../redux/actionCreators/recordActionCreator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddRecords = () => {
  const [platform, setPlatform] = useState("");
  const [amount, setAmount] = useState("");
  const [donor, setDonor] = useState("");
  const [donation_date, setDonation_date] = useState(null);
  const [progress, setProgress] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!platform || !donor || !amount || !donation_date) {
      return toast.warning("Please fill all fields");
    }

    const data = {
      platform: platform,
      donor: donor,
      donation_date: donation_date,
      date: new Date(),
      amount: amount,
    };

    dispatch(doRecord(data, setProgress));
    history.push("/admin/dashboard/manage-records");
  };

  return (
    <div>
      <Col className="mx-auto">
        {progress > 0 && progress < 100 ? (
          <>
            <h1>Uploading Post {progress} %</h1>
            <ProgressBar now={progress} max={100} />
          </>
        ) : progress === 100 ? (
          <>
            <h1>Post Uploaded Successfully </h1>
          </>
        ) : (
          <Form onSubmit={handleSubmit} className="p-4">
            <Form.Group controlId="donation_date" className="my-2">
              <DatePicker
                className="form-control"
                selected={donation_date}
                onChange={(e) => setDonation_date(e)}
                dateFormat="MM/dd/yyyy"
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                placeholderText="Donation Date"
              />
            </Form.Group>
            <Form.Group controlId="donor" className="my-2">
              <Form.Control
                type="text"
                name="donor"
                placeholder="Name"
                value={donor}
                onChange={(e) => setDonor(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="platform" className="my-2">
              <Form.Control
                type="text"
                name="platform"
                placeholder="Platform"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="amount" className="my-2">
              <Form.Control
                type="text"
                name="amount"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="btn" className="my-2">
              <Button
                type="submit"
                variant={"dark"}
                bg="dark"
                className="form-control"
              >
                Add Record
              </Button>
            </Form.Group>
          </Form>
        )}
      </Col>
    </div>
  );
};

export default AddRecords;
