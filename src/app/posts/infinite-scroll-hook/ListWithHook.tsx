"use client";

import React, { LegacyRef } from "react";

import useInfiniteScrollV2 from "./useInfiniteScroll-2";
import useInfiniteScrollV1 from "./useInfiniteScroll-1";

interface Props {
  list: number[];
  loadMore(): void;
  loading: boolean;
  hookVersion: 1 | 2;
}

const ListWithHook = ({ list, loading, loadMore, hookVersion }: Props) => {
  const infiniteScrollRefV1 = useInfiniteScrollV1({ callback: loadMore });
  const infiniteScrollRefV2 = useInfiniteScrollV2({
    callback: loadMore,
    isActive: !loading,
  });

  const ref = hookVersion === 1 ? infiniteScrollRefV1 : infiniteScrollRefV2;

  return (
    <div className="h-80 flex flex-col gap-4">
      <ul className="flex flex-col gap-2">
        {list.map((item, index, array) => (
          <li
            className="border border-3 border-emerald-500 w-fit min-h-16 rounded p-4 text-zinc-800"
            key={item}
            ref={
              index === array.length - 1
                ? (ref as unknown as LegacyRef<HTMLLIElement>)
                : undefined
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWithHook;
