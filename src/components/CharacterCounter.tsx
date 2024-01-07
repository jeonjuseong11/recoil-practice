import { useRecoilValue } from 'recoil';
import TextInput from './TextInput';
import charCountState from '../recoil/counter/selector';
import CharacterCount from './CharacterCount';

function CharacterCounter() {
  const count = useRecoilValue(charCountState);

  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
export default CharacterCounter;
