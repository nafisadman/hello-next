"use client";
import Link from 'next/link';
import React from 'react';

const StoryCard = ({ story }) => {

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full my-4">
            <div className="p-8 flex-grow">
                <div className="flex items-center gap-4">
                    <img 
                        className="h-16 w-16 rounded-full object-cover border-2 border-indigo-500 shadow-sm" 
                        src={story.image} 
                        alt={story.name} 
                    />
                    <div>
                        <h2 className="text-lg leading-tight font-bold text-gray-900">
                            {story.name}
                        </h2>
                        <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase">
                            {story.designation}
                        </p>
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-tighter">
                            {story.company} • {story.experience}
                        </p>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-gray-900 font-bold text-xs uppercase tracking-widest mb-2">The Journey</h3>
                    <p className="text-gray-600 italic leading-relaxed text-sm">
                        "{story.story}"
                    </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                    {story.skills.map((skill, index) => (
                        <span 
                            key={index} 
                            className="px-2 py-1 text-[10px] font-bold bg-gray-100 text-gray-600 rounded uppercase tracking-wider"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Navigation Button Section */}
            <div className="px-8 pb-8">
                <Link
                    href={`/stories/${story.id}`}
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg transition-colors duration-200 shadow-md flex items-center justify-center gap-2 group"
                >
                    View Full Profile
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default StoryCard;