type HeadingProps = {
  text: string;
  Type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export default function Heading({ text, Type }: HeadingProps) {
  return <Type className="text-heading">{text}</Type>;
}
