import CourseCard from "@/components/CourseCard";

const AllCoursesPage = async ({ searchParams }) => {
  const { search } = await searchParams;

  const response = await fetch("https://a8-skill-sphere.vercel.app/data.json");
  const data = await response.json();

  const filteredCourses = search
    ? data.filter((course) =>
        course.title.toLowerCase().includes(search.toLowerCase()),
      )
    : data;

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-4 py-6">
        Our All Courses
      </h2>

      <form className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          name="search"
          defaultValue={search || ""}
          placeholder="Search courses by title..."
          className="w-full max-w-md px-4 py-3 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="px-5 py-3 bg-indigo-600 text-white rounded-2xl"
        >
          Search
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            No courses found
          </p>
        )}
      </div>
    </div>
  );
};

export default AllCoursesPage;
