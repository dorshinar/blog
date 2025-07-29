"use client";

import useInfiniteScrollV2 from "./useInfiniteScroll-2";
import useInfiniteScrollV1 from "./useInfiniteScroll-1";
import { Ref } from "react";

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
    <div className="flex h-80 flex-col gap-4">
      <ul className="flex flex-col gap-2">
        {list.map((item, index, array) => (
          <li
            className="border-primary-600 text-primary-1100 min-h-16 w-fit rounded border-3 p-4"
            key={item}
            ref={
              index === array.length - 1
                ? (ref as unknown as Ref<HTMLLIElement>)
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
