import { Link } from "@/components/Link";
import { MoveLeftIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <div className="text-xl">404 | This page does not exist</div>
      <Link
        href="https://dorshinar.me"
        className="flex w-fit items-center gap-2"
      >
        <MoveLeftIcon /> Back to site
      </Link>
    </div>
  );
}
