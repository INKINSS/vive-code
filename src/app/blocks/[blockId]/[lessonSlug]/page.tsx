import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import matter from "gray-matter";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ blockId: string; lessonSlug: string }>;
}) {
  const { blockId, lessonSlug } = await params;

  // Buscar el archivo MDX en la carpeta content
  const contentDir = path.join(
    process.cwd(),
    "src",
    "content",
    "blocks",
    blockId
  );

  if (!fs.existsSync(contentDir)) {
    notFound();
  }

  const files = fs.readdirSync(contentDir);

  // Buscar el archivo que coincida con el slug
  const matchingFile = files.find((file) => {
    if (!file.endsWith(".mdx") || file === "index.mdx") return false;

    const filepath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { data } = matter(fileContent);

    return data.slug === lessonSlug;
  });

  if (!matchingFile) {
    notFound();
  }

  const lessonPath = path.join(contentDir, matchingFile);
  const source = fs.readFileSync(lessonPath, "utf-8");

  const { content, frontmatter } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="prose max-w-4xl mx-auto px-4 py-8 text-customMainBlack animate-blurUp">
      {content}
    </article>
  );
}
