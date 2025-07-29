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
            className="border-primary-600 text-primary-1100 min-h-16 w-fit rounded border-3 p-4"
            key={item}
          >
            Item {item}
          </li>
        ))}
      </ul>
      <button
        className="text-gray-1100 w-fit cursor-pointer rounded bg-gray-300 p-4 text-base hover:bg-gray-400 focus-visible:bg-gray-400 active:bg-gray-500"
        onClick={loadMore}
        title={loading ? "loading..." : "Load More!"}
      >
        {loading ? "loading..." : "Load More!"}
      </button>
    </div>
  );
};

export default SimpleList;
