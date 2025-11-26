import { ReactNode } from "react";
import { getLessons, getBlockMetadata } from "@/lib/mdx/getLessons";
import Link from "next/link";

const BlockLayout = async ({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ blockId: string }>;
}) => {
  const { blockId } = await params;
  const lessons = await getLessons(blockId);
  const metadata = await getBlockMetadata(blockId);
  return (
    <div className="drawer lg:drawer-open">
      <input id="drawer-sidebar" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <label
          htmlFor="drawer-sidebar"
          className="btn btn-primary drawer-button lg:hidden m-4"
        >
          📚 Lecciones
        </label>
        <main className="p-4 animate-blurUp">{children}</main>
      </div>

      <div className="drawer-side">
        <label htmlFor="drawer-sidebar" className="drawer-overlay" />
        <aside className="min-h-full w-80 p-4">
          <ul className="menu">
            <Link href={"/blocks/" + blockId} className="py-1 px-3 text-customMainBlack">
              {metadata?.title || blockId}
            </Link>
            {lessons.map((lesson) => (
              <li key={lesson.slug}>
                <Link
                  href={`/blocks/${blockId}/${lesson.slug}`}
                  className="active:bg-transparent visited:underline visited:underline-offset-4 text-customMainBlack"
                >
                  <span className="font-mono text-sm opacity-60">
                    {String(lesson.order).padStart(2, "0")}
                  </span>
                  <span>{lesson.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default BlockLayout;
