interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  const wordCount = title.split(' ').length;

  return (
    <>
      <h2>{title} {wordCount > 1 && '(длинное название)'}</h2>
      <section>{children}</section>
    </>
  );
};

export default Section;