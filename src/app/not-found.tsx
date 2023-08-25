import { Link } from "@/components/Link";
import { MoveLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <div className="text-xl">404 | This page does not exist</div>
      <Link
        href="https://dorshinar.me"
        className="flex items-center gap-2 w-fit"
      >
        <MoveLeftIcon /> Back to site
      </Link>
    </div>
  );
}
