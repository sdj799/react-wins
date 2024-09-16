interface DescProps {
  title: string;
  text: string;
  isUnder?: boolean;
  underline?: string;
}

const Description = function ({ title, text, isUnder, underline }: DescProps) {
  return (
    <div className="text-section">
      <p className="title">{title}</p>
      <p className="text">
        {text}
        {isUnder && <span className="underline">{underline}</span>}
      </p>
    </div>
  );
};

export default Description;
