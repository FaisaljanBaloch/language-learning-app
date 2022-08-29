import { Link } from 'react-router-dom'

function StartButton() {
  return (
    <Link
      className="border p-3 bg-white text-primary uppercase shadow-md shadow-blue-400 font-semibold hover:opacity-80 focus:opacity-90 hover:transition-colors hover:duration-200 hover:ease-in-out"
      to="lessons"
    >
      Start Learning
    </Link>
  );
}

export default StartButton;
