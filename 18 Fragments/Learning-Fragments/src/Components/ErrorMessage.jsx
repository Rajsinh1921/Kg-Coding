const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 && <h2>Nothing to eat</h2>}</>;
};

export default ErrorMessage;
