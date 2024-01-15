import { NavLink } from 'react-router-dom';
import { PageContainer } from '../common';

const Error = () => {
  return (
    <PageContainer>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            이런! 문제가 발생했습니다.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            불편을 드려 죄송합니다. 다시 시도하거나 문제가 계속되면 지원팀에
            문의하십시오.
          </p>
          <NavLink
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            to="#"
          >
            돌아가기
          </NavLink>
        </div>
      </div>
    </PageContainer>
  );
};

export default Error;
