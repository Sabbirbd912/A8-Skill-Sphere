import CourseCard from "@/components/CourseCard";
import Link from "next/link";
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
      <Link href="/all-courses" className="block w-fit mx-auto group">
        <h2 className="bg-gradient-to-tr from-black via-blue-800 to-blue-500 bg-clip-text text-transparent text-3xl font-extrabold py-6 text-center group-hover:opacity-90 transition-opacity">
          Our All Courses
        </h2>
      </Link>

      <form className="flex justify-center gap-2 mb-8">
        <div className="w-full max-w-md flex items-center gap-2 border rounded-2xl shadow-sm bg-white p-1.5 focus-within:ring-2 focus-within:ring-indigo-500">
          <input
            type="text"
            name="search"
            defaultValue={search || ""}
            placeholder="Search courses by title..."
            className="w-full px-3 py-2 bg-transparent outline-none text-slate-700 placeholder-slate-400 text-sm"
          />

          <button
            type="submit"
            className="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white font-medium text-sm rounded-xl transition-colors duration-200 shrink-0"
          >
            Search
          </button>
        </div>
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
