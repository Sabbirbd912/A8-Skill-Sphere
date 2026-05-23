

const PopularCourses = async () => {
    const res = await fetch("https://a8-skill-sphere.vercel.app/data.json");
    const data = await res.json();
    const popularCourses = data.slice(0,3)
    return (
        <div>
            <h2>Our Popular Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {popularCourses.map(course => (
                    <div key={course.id} className="border rounded-lg overflow-hidden shadow-md">
                        <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{course.title}</h3>
                            <p className="text-gray-600">{course.description}</p>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCourses;