"use client";

import React from "react";

interface Props {
  list: number[];
  loadMore(): void;
  loading: boolean;
  hookVersion: 1 | 2;
}

const SimpleList = ({ list, loadMore, loading }: Props) => {
  return (
    <div className="h-80 w-full flex flex-col gap-4 p-4 overflow-auto">
      <ul className="flex flex-col gap-2">
        {list.map((item) => (
          <li
            className="border border-3 border-emerald-500 w-fit min-h-16 rounded p-4 text-zinc-800"
            key={item}
          >
            Item {item}
          </li>
        ))}
      </ul>
      <button
        className="rounded w-fit bg-emerald-500 hover:bg-emerald-700 focus-visible:bg-emerald-700 active:bg-emerald-800 text-zinc-200 p-4 text-base"
        onClick={loadMore}
        title={loading ? "loading..." : "Load More!"}
      >
        {loading ? "loading..." : "Load More!"}
      </button>
    </div>
  );
};

export default SimpleList;
