import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export default async function BlockPage({
  params,
}: {
  params: Promise<{ blockId: string }>;
}) {
  const { blockId } = await params;

  const indexPath = path.join(
    process.cwd(),
    "src",
    "content",
    "blocks",
    blockId,
    "index.mdx"
  );

  if (!fs.existsSync(indexPath)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Bloque no encontrado</h1>
          <p className="text-gray-600">
            No se pudo encontrar el contenido de este bloque.
          </p>
        </div>
      </div>
    );
  }

  const source = fs.readFileSync(indexPath, "utf-8");
  const { content } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="prose max-w-4xl mx-auto px-4 py-8 text-customMainBlack animate-blurUp">{content}</article>
  );
}
