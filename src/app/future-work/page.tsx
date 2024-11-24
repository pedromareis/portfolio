import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function FutureWorkPage() {
  const futureWork = [
    "Project information page",
    "Add older projects (specially mobile apps)",
    "Complete redesing of the app",
  ];

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">
          Future work
        </h1>
      </BlurFade>
      {futureWork.map((element, id) => (
        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={id}>
          <div className="w-full flex flex-col">
            <li className="tracking-tight">{element}</li>
            {/* <p className="h-6 text-xs text-muted-foreground">{element}</p> */}
          </div>
        </BlurFade>
      ))}
    </section>
  );
}
