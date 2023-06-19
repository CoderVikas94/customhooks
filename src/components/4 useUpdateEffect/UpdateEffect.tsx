import React, { useState } from 'react';
import useUpdateEffect from './useUpdateEffect';

const UpdateEffect: React.FC = () => {
  const [count, setCount] = useState<number>(10);

  useUpdateEffect(() => alert(count), [count]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default UpdateEffect;
