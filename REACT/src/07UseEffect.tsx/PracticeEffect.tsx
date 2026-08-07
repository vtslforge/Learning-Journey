type PracticeEffectProps = {
  counter: number;
  handleCounter: () => void;
};

const PracticeEffect = ({ counter, handleCounter }: PracticeEffectProps) => {
  return (
    <div>
      <h3 className="border" onClick={handleCounter}>
        Counter from Main: {counter}
      </h3>
    </div>
  );
};

export default PracticeEffect;
