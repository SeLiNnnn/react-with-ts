import React, {useState} from 'react';

const UseState: React.FC = () => {
  const [like, setLike] = useState(0);
  return (
    <section>
      <h2>
        Hooks-useState
      </h2>
      <button onClick={
        () => {
          setLike(like + 1);
        }
      }> {like} Like 👍🏻
      </button>
    </section>
  );
};

export default UseState;
