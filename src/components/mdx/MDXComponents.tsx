import { HTMLProps } from "react";

const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

const H2 = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  const text = typeof children === "string" ? children : "";
  const id = generateSlug(text);

  return (
    <h2 id={id} {...props}>
      {children}
    </h2>
  );
};

const H3 = ({ children, ...props }: HTMLProps<HTMLHeadingElement>) => {
  const text = typeof children === "string" ? children : "";
  const id = generateSlug(text);

  return (
    <h3 id={id} {...props}>
      {children}
    </h3>
  );
};

export const mdxComponents = {
  h2: H2,
  h3: H3,
};
