"use client";

import { Lesson } from "@/lib/mdx/getLessons";

interface SubmenuHeadingsProps {
  lesson: Lesson;
  blockId: string;
}

export default function SubmenuHeadings({
  lesson,
  blockId,
}: SubmenuHeadingsProps) {
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ul className="ml-6">
      {lesson.headings.map((h) => (
        <li key={h.slug}>
          <button
            onClick={() => scrollToHeading(h.slug)}
            className="text-sm block text-left text-customMainBlack active:bg-transparent"
          >
            {h.text}
          </button>
        </li>
      ))}
    </ul>
  );
}
