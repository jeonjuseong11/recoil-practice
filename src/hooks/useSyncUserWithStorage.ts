import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { userStateSelector } from '../recoil/auth';

const useInitializeUserFromStorage = () => {
  const setUser = useSetRecoilState(userStateSelector);
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, [setUser]);
};
export default useInitializeUserFromStorage;
