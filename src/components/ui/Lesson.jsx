function Lesson({ lesson, name }) {
  return (
    <div className="mb-2 px-3 py-2 rounded border flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <span className="rounded-full px-3 py-1 font-semibold bg-teal-600 text-white">
          {lesson}
        </span>
        <p className="font-semibold text-teal-600">{name}</p>
      </div>
      <a
        className="px-3 py-2 rounded bg-teal-600 font-semibold text-white hover:opacity-80 hover:transition hover:duration-250 hover:ease-in-out"
        href=""
      >
        Start
      </a>
    </div>
  );
}

export default Lesson;
