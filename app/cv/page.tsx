import { MDXRemote } from 'next-mdx-remote/rsc';
import { readFile } from 'fs/promises';
import path from 'path';

export const metadata = {
  title: "CV",
  description: "Dmitrii Shiriaev's CV and professional experience",
};

export default async function CVPage() {
  const cvContent = await readFile(
    path.join(process.cwd(), 'content/cv.mdx'),
    'utf-8'
  );

  return (
    <section className="mt-6">
      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-h4:text-base">
        <MDXRemote source={cvContent} />
      </div>
    </section>
  );
}
