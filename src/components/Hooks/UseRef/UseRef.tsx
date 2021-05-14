import React, {useEffect, useRef} from 'react';

const UseRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <section>
      <input type="text" placeholder="输入文字..." ref={inputRef}/>
    </section>
  );
};

export default UseRef;
