import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts, readMDXFile } from "app/lib/posts";
import { metaData } from "app/config";
import { CustomMDX } from "app/components/mdx"; // Using your custom MDX component

export default async function Page({ params }) {
  const slug = params?.slug;
  
  if (!slug) {
    notFound();
  }

  try {
    const { metadata, content } = readMDXFile(slug);
    
    return (
      <section>
        <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
          {metadata.title}
        </h1>
        <div className="prose prose-neutral dark:prose-invert">
          <CustomMDX source={content} />
        </div>
      </section>
    );
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const slug = params?.slug;
  
  try {
    const post = getBlogPosts().find((post) => post.slug === slug);

    if (!post) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };
    }

    const { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
    const ogImage = image ? image : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "article",
        publishedTime,
        url: `${metaData.baseUrl}/blog/${post.slug}`,
        images: [{ url: ogImage }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch (error) {
    return {
      title: "Error",
      description: "There was an error generating the blog post metadata.",
    };
  }
}
