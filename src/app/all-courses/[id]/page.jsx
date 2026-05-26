import { Clock, Star, User, Users } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button, Card } from "@heroui/react";
import courses from "../../../../public/data.json";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const singleCourse = courses.find((course) => course.id == id);
  return (
    <div className="min-h-1/2 w-full flex items-center justify-center pt-16">
      <Card className="w-10/12 border border-slate-100 bg-white p-5 flex flex-col md:flex-row items-center md:items-stretch gap-6 ">
        <div className="relative h-64 w-full md:h-60 md:w-60 shrink-0 overflow-hidden rounded-xl bg-slate-50">
          <Image
            src={singleCourse.thumbnail}
            alt={singleCourse.title}
            width={220}
            height={200}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            priority
          />
          <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white font-medium text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">
            {singleCourse.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between w-full">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
              {singleCourse.level}
            </span>

            <h3 className="text-3xl font-black text-slate-800 mt-2 pr-8">
              {singleCourse.title}
            </h3>

            <p className="text-xl text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
              {singleCourse.description}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-4 font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <User className="text-indigo-500 size-4" />
                <span>{singleCourse.instructor}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="text-amber-500 size-4" />
                <span>{singleCourse.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="text-sky-500 size-4" />
                <span>{singleCourse.students?.toLocaleString()} Students</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-500 font-bold">
                <Star className="fill-amber-500 text-amber-500 size-4" />
                <span>{singleCourse.rating}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm text-slate-400 uppercase font-bold tracking-wider">
                Price
              </span>
              <span className="text-2xl font-black text-slate-800">
                ${singleCourse.price}
              </span>
            </div>

            <Button className="font-bold bg-indigo-600 text-white px-6 rounded-xl h-10">
              Enroll Now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetailsPage;
