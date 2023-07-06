const Alert = ({ children, showAlert }) => {
  return (
    <>
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          {children}
        </div>
      )}
    </>
  );
};
export default Alert;
