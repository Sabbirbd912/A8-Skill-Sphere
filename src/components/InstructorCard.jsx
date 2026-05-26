"use client";

import { Card } from "@heroui/react";
import Image from "next/image";

const InstructorCard = ({ instructor }) => {
  if (!instructor) return null;

  return (
    <Card className="max-w-sm bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full p-5">
      
      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-indigo-50 group-hover:border-indigo-500 transition-colors duration-300 shadow-sm">
        <Image
          src={instructor.avatar}
          alt={instructor.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-w-7xl) 33vw, 100vw"
        />
      </div>

      <div className="text-center mt-5 grow flex flex-col">
        <h3 className="text-xl font-black text-slate-800 group-hover:text-indigo-600 transition-colors duration-200">
          {instructor.name}
        </h3>
        
        <div className="mt-1.5">
          <span className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {instructor.role} 
          </span>
        </div>

        <p className="text-sm text-slate-500 mt-3 line-clamp-2 leading-relaxed grow">
          {instructor.bio}
        </p>

        <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-4 mt-4 text-xs font-medium text-slate-600">
          <div className="border-r border-slate-100 py-1">
            <span className="text-amber-500 font-bold text-sm block">⭐ {instructor.rating}</span>
            <span className="text-slate-400 font-normal">Rating</span>
          </div>
          <div className="py-1">
            <span className="text-slate-800 font-bold text-sm block">
              {instructor.totalStudents?.toLocaleString()}
            </span>
            <span className="text-slate-400 font-normal">Students</span>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-4 pt-2 text-slate-400">
          {instructor.socials?.linkedin && (
            <a href={instructor.socials.linkedin} target="_blank" rel="noreferrer" className="text-xs hover:text-indigo-600 transition-colors">
              LinkedIn ↗
            </a>
          )}
          {instructor.socials?.github && (
            <a href={instructor.socials.github} target="_blank" rel="noreferrer" className="text-xs hover:text-slate-800 transition-colors">
              GitHub ↗
            </a>
          )}
        </div>

      </div>
    </Card>
  );
};

export default InstructorCard;