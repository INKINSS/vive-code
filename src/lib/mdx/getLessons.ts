import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Lesson {
    title: string;
    order: number;
    slug: string;
    description: string;
    filePath: string;
    headings: { level: number; text: string; slug: string }[];
}

export interface BlockMetadata {
    title: string;
    slug: string;
    level: string;
    description?: string;
}

export const getLessons = async (blockId: string): Promise<Lesson[]> => {
    const contentDir = path.join(process.cwd(), 'src', 'content', 'blocks', blockId);

    if (!fs.existsSync(contentDir)) {
        return [];
    }

    const files = fs.readdirSync(contentDir);
    const mdxFiles = files.filter(file => file.endsWith('.mdx') && file !== 'index.mdx');

    const lessons = mdxFiles.map((filename) => {
        const filePath = path.join(contentDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        return {
            title: data.title || filename.replace('.mdx', ''),
            order: data.order || 999,
            slug: data.slug || filename.replace('.mdx', ''),
            description: data.description || '',
            filePath: filename,
            headings: extractHeadings(fileContent),
        };
    });

    return lessons.sort((a, b) => a.order - b.order);
};

export const getBlockMetadata = async (blockId: string): Promise<BlockMetadata | null> => {
    const indexPath = path.join(process.cwd(), 'src', 'content', 'blocks', blockId, 'index.mdx');

    if (!fs.existsSync(indexPath)) {
        return null;
    }

    const fileContent = fs.readFileSync(indexPath, 'utf-8');
    const { data } = matter(fileContent);

    return {
        title: data.title || blockId,
        slug: data.slug || blockId,
        level: data.level || 'Básico',
        description: data.description || '',
    };
};

export const extractHeadings = (content: string) => {
    const headingRegex = /^(##?)\s+(.*)$/gm;
    const headings: { level: number; text: string; slug: string }[] = [];

    let match;
    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const slug = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");

        headings.push({ level, text, slug });
    }

    return headings;
};
