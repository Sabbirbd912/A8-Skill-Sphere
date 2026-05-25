"use client";
import Image from "next/image";
import { Star, Users, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
const CourseCard = ({ course }) => {
  return (
    <div className="max-w-sm bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={course.thumbnail}
          alt={course.title}
          width={400}
          height={225}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          priority
        />

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-white/90 backdrop-blur-md text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {course.level}
          </span>
          <span className="bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            {course.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Instructor & Meta info */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span className="font-medium text-indigo-600">
            By {course.instructor}
          </span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{course.duration}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-800 line-clamp-1 group-hover:text-indigo-600 transition-colors duration-200">
          {course.title}
        </h3>
        <p className="text-sm text-slate-600 mt-1 mb-4 line-clamp-2 flex-grow">
          {course.shortDescription}
        </p>

        <div className="flex items-center gap-4 py-3 my-3 border-y border-slate-50 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-800">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4 text-slate-400" />
            <span>{course.students.toLocaleString()} Students</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div>
            <span className="text-xs text-slate-400 block font-medium">
              Price
            </span>
            <span className="text-2xl font-black text-slate-900">
              ${course.price}
            </span>
          </div>

          <Link href={`all-courses/${course.id}`} className="inline-flex items-center gap-1 bg-slate-900 text-white font-medium text-sm px-4 py-2.5 rounded-xl hover:bg-indigo-600 transition-colors duration-200 shadow-sm">
            <span>Explore</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
