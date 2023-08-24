import Image from "next/image";
import Link from "next/link";
import profilePic from "./profile-pic.jpg";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { PostPreview } from "../components/post-preview";
import { Metadata } from "next";
import { getMetadata } from "@/utils/get-metadata";
import { getPosts } from "../utils/get-posts";

export default function Home() {
  const posts = getPosts();

  return (
    <>
      <section className="flex flex-col sm:flex-row items-center w-full gap-8 pb-12 px-4 sm:px-8 sm:max-w-3xl">
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
              className="focus-within:text-emerald-500 hover:text-emerald-500"
            >
              <GithubIcon />
            </Link>
            <Link
              href="https://twitter.com/DorShinar"
              aria-label="Twitter"
              className="focus-within:text-emerald-500 hover:text-emerald-500"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dorshinar/"
              aria-label="Linkedin"
              className="focus-within:text-emerald-500 hover:text-emerald-500"
            >
              <LinkedinIcon />
            </Link>
          </address>
        </div>
      </section>

      <section className="flex flex-col gap-12 px-4 sm:px-8 sm:max-w-3xl pb-8">
        {posts.map((post) => (
          <PostPreview post={post} key={post.slug} cover={post.cover} />
        ))}
      </section>
    </>
  );
}

export const metadata: Metadata = {
  ...getMetadata({
    title: "Dor Shinar",
    description: "My Personal blog for thoughts.",
    slug: "",
    images: [profilePic],
  }),
  metadataBase: new URL("https://dorshinar.me"),
  manifest: "/manifest.json",
};
