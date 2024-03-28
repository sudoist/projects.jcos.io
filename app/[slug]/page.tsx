import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";

type Props = {
  params: {
    slug: string;
  };
};

// const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const views = 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />

        {/* Logo cards */}
        <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-4 xl:gap-x-8">
          {project.stack.map((item) => (
            <li className="overflow-hidden rounded-xl border border-gray-200">
              <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                <img src={item.src} alt={item.alt}
                     className="flex-none rounded-lg object-cover"/>
              </div>
              <div className="mt-2 -ml-3 text-sm text-center font-medium text-gray-900">{item.name}</div>
            </li>

          ))}
        </ul>
      </article>
    </div>
  );
}
