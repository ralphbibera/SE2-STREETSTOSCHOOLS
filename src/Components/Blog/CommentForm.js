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
          <div>
        <div classname="form-group">
          <textarea classname="form-control" id="input-comment" placeholder="Write a comment..." defaultValue={""} />
        </div>
        <div classname="row gy-3">
          <div classname="col-sm-3">
            <button type="button" classname="btn btn-cancel">
              Cancel
            </button>
          </div>
          <div classname="col-sm-3">
            <button classname="btn btn-submit" type="submit">
              Post
            </button>
          </div>
        </div>
      </div>
          </form>
        </>
      ) : (
        <>
          <form>
          <div>
        <div classname="form-group">
          <textarea classname="form-control" id="input-comment" placeholder="Write a comment..." defaultValue={""} />
        </div>
        <div classname="form-group row">
          <div classname="col">
            <input type="text" classname="form-control" id="name" placeholder="Name" />
          </div>
          <div classname="col">
            <input type="email" classname="form-control" id="name" placeholder="Email" />
          </div>
        </div>
        <div classname="row gy-3">
          <div classname="col-sm-3">
            <button type="button" classname="btn btn-cancel">
              Cancel
            </button>
          </div>
          <div classname="col-sm-3">
            <button classname="btn btn-submit" type="submit">
              Post
            </button>
          </div>
        </div>
      </div>
          </form>
        </>
      )}
    </form>
  );
};

export default CommentForm;
