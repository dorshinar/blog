"use client";

interface Props {
  list: number[];
  loadMore(): void;
  loading: boolean;
  hookVersion: 1 | 2;
}

const SimpleList = ({ list, loadMore, loading }: Props) => {
  return (
    <div className="flex h-80 w-full flex-col gap-4 overflow-auto p-4">
      <ul className="flex flex-col gap-2">
        {list.map((item) => (
          <li
            className="min-h-16 w-fit rounded border-3 border-emerald-500 p-4 text-zinc-800"
            key={item}
          >
            Item {item}
          </li>
        ))}
      </ul>
      <button
        className="w-fit rounded bg-emerald-500 p-4 text-base text-zinc-200 hover:bg-emerald-700 focus-visible:bg-emerald-700 active:bg-emerald-800"
        onClick={loadMore}
        title={loading ? "loading..." : "Load More!"}
      >
        {loading ? "loading..." : "Load More!"}
      </button>
    </div>
  );
};

export default SimpleList;
