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
        <div className="form-group">
          <textarea className="form-control" placeholder="Comment..." />
        </div>
      ) : (
        <>
          <div className="form-group">
            <textarea className="form-control" placeholder="Comment..." />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
            <input type="text" className="form-control" placeholder="Email" />
          </div>
        </>
      )}
    </form>
  );
};

export default CommentForm;
