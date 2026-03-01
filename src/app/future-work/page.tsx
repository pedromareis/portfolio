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
    "Project information page with tech stack, description, links, biggest challenges, key features and more.",
    "Add some older projects, specially mobile apps.",
    "Develop a new version of the website with a revamped design and new features.",
    "New section with my personal projects.",
  ];

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-bold mb-8">🚀 Future work</h1>
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
