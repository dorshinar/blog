import Image from "next/image";
import Link from "next/link";
import profilePic from "./profile-pic.jpg";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { PostPreview } from "../components/post-preview";
import { Metadata, Viewport } from "next";
import { getMetadata } from "@/utils/get-metadata";
import { getPosts } from "../utils/get-posts";

export default function Home() {
  const posts = getPosts();

  return (
    <>
      <section className="flex w-full flex-col items-center gap-8 px-4 pb-12 sm:max-w-3xl sm:flex-row sm:px-8">
        <Image
          src={profilePic}
          alt="The author"
          width={200}
          height={200}
          className="rounded-[100%]"
          priority
        ></Image>

        <div className="flex flex-col justify-between gap-8">
          <p>
            I&apos;m <strong>Dor Shinar</strong>. I am a Software Engineer from
            Israel 🇮🇱.
            <br />
            <br />I have a passion for web development and I focus on React. I
            also love TypeScript and testing.
          </p>

          <address className="flex w-full flex-row justify-start gap-2">
            <Link
              href="https://github.com/dorshinar"
              aria-label="Github"
              className="focus-within:text-primary-1100 hover:text-primary-1100 outline-none"
            >
              <GithubIcon />
            </Link>
            <Link
              href="https://twitter.com/DorShinar"
              aria-label="Twitter"
              className="focus-within:text-primary-1100 hover:text-primary-1100 outline-none"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dorshinar/"
              aria-label="Linkedin"
              className="focus-within:text-primary-1100 hover:text-primary-1100 outline-none"
            >
              <LinkedinIcon />
            </Link>
          </address>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-4 pb-8 sm:max-w-3xl sm:px-8">
        {posts.map((post, index) => (
          <PostPreview
            post={post}
            key={post.slug}
            cover={post.cover}
            priority={index === 0}
          />
        ))}
      </section>
    </>
  );
}

export const metadata: Metadata = {
  ...getMetadata(
    {
      title: "Dor Shinar",
      description: "My Personal blog for thoughts.",
      slug: "",
      images: [profilePic],
    },
    false,
  ),
  metadataBase: new URL("https://dorshinar.me"),
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#18181b" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};
