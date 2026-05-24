"use client";

import { Card } from "@heroui/react";

const TipsHack = ({ data }) => {
  if (!data) return null;

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
          {data.sectionSubtitle}
        </span>
        <h2 className="text-3xl font-black text-slate-800 mt-3 sm:text-4xl">
          {data.sectionTitle}
        </h2>
        <p className="text-slate-600 mt-2 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          {data.sectionDescription}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {data.categories?.map((category) => {
          const isIndigo = category.themeColor === "indigo";
          const bgBadgeColor = isIndigo ? "bg-indigo-50" : "bg-emerald-50";
          const iconBgColor = isIndigo ? "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600" : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600";
          const titleHoverColor = isIndigo ? "group-hover:text-indigo-600" : "group-hover:text-emerald-600";

          return (
            <Card 
              key={category.id} 
              className="p-6 sm:p-8 border border-slate-100 bg-white/50 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
                  <span className={`text-2xl p-2.5 ${bgBadgeColor} rounded-xl shadow-inner`}>
                    {category.categoryIcon}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800">
                    {category.categoryName}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.tips?.map((tip) => (
                    <div key={tip.id} className="flex gap-4 items-start group">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors duration-300 ${iconBgColor} group-hover:text-white shadow-sm`}>
                        {tip.id.split("-")[1].toUpperCase()}
                      </div>
                      
                      <div>
                        <h4 className={`font-bold text-slate-800 transition-colors duration-200 ${titleHoverColor}`}>
                          {tip.title}
                        </h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {tip.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default TipsHack;