interface HistoryProps {
  year: string;
  content: string;
  img: string;
}

const History = function ({ year, content, img }: HistoryProps) {
  return (
    <div className="history-section">
      <img className="ballIcon" src={img} alt="ball_icon" />
      <span className="year">{year}</span>
      <p className="content">{content}</p>
    </div>
  );
};

export default History;
