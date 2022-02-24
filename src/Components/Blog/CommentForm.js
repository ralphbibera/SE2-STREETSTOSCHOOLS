import { shallowEqual } from "react-redux";
import { useSelector } from "react-redux";

const CommentForm = () => {
  const { isLoggedIn, user } = useSelector(
    (state) => ({
      isLoggedIn: state.auth.isLoggedIn,
      user: state.auth.user,
    }),
    shallowEqual
  );

  return (
    <form>
      {isLoggedIn ? (
        <>
          <form>
            <div className="form-group">
              <textarea
                className="form-control"
                id="input-comment"
                placeholder="Write a comment..."
              ></textarea>
            </div>
            <div className="row gy-3">
              <div className="col-sm-3">
                <button type="button" className="btn btn-cancel">
                  Cancel
                </button>
              </div>
              <div className="col-sm-3">
                <button className="btn btn-submit" type="submit">
                  Post
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <form>
            <div className="form-group">
              <textarea
                className="form-control"
                id="input-comment"
                placeholder="Write a comment..."
              ></textarea>
            </div>
            <div className="form-group row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row gy-3">
              <div className="col-sm-3">
                <button type="button" className="btn btn-cancel">
                  Cancel
                </button>
              </div>
              <div className="col-sm-3">
                <button className="btn btn-submit" type="submit">
                  Post
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </form>
  );
};

export default CommentForm;
