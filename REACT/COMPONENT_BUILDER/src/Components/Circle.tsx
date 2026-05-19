const Circle = () => {
  const words: string[] = ["a", "m", "a", "n"];

  return (
    <div className="border p-4">
      <div className="flex gap-3">
        {words.map((word, index) => (
          <p
            key={index}
            className="animate-bounce text-2xl font-bold"
            style={{ animationDelay: `${index * 0.3}s`, }}>
            {word}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Circle;
