import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
	project: Project;
	views: number;
};

export const Article: React.FC<Props> = ({ project, views }) => {
	return (
		<Link href={`/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200"
					 dangerouslySetInnerHTML={{ __html: project.description }}>
				</p>
				{/* Tech stack */}
				<h4 className="mt-8 z-20 text-xl font-medium duration-1000 lg:text-xl text-zinc-200 group-hover:text-white font-display">
					Tech Stack:
				</h4>
				<div
					className="mx-auto mt-2 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-8 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-4 lg:max-w-4xl lg:grid-cols-4">
					{project.preview.map((item: object) => (
						<div className="text-sm text-center text-gray-200">
							{item.name as String}
						</div>
					))}
				</div>

			</article>
		</Link>
	);
};
