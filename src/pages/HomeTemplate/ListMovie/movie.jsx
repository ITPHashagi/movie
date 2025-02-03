import React from "react";

export default function Movie() {
  return (
    <div>
      <div classname="max-w-sm  border border-gray-700 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <img classname="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt />

        <div classname="p-5">
          <a href="#">
            <h5 classname="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
}
