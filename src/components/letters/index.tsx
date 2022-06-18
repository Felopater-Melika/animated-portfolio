import './index.scss';

type lettersProp = {
  letterClass: string;
  strArray: string[];
  idx: number;
};
/* This component is for adding animations to the letter when hovered the way it
works is by simply taking a string of characters and then mapping it and assigning
 a class for the animation in process. */
const Letters = ({ letterClass, strArray, idx }: lettersProp) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default Letters;
