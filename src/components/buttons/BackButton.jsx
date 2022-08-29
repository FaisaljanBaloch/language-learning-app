import { Link, useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate()
  return (
    <Link
      onClick={() => navigate(-1)}
      className="inline-block p-2 mb-2 border font-semibold hover:bg-blue-500 hover:transition-colors hover:duration-200 hover:ease-in-out"
      to="/"
    >
      <span>&larr;</span> Back
    </Link>
  );
}

export default BackButton;
