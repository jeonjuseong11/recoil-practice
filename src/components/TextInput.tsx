import { useRecoilState } from 'recoil';
import textState from '../recoil/counter/atoms';
import { ChangeEvent } from 'react';

export default function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
