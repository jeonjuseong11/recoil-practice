import React from 'react';
import { NavLink } from 'react-router-dom';
import { PageContainer } from '../common';

const NotFoundError = () => {
  return (
    <PageContainer>
      <div className="max-w-md mx-auto">
        <div className="text-9xl font-extrabold text-gray-400 dark:text-gray-600">
          404
        </div>
        <h2 className="mt-2 text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          오류
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          죄송합니다. 찾으시는 페이지를 찾을 수 없습니다.
        </p>
        <div className="mt-6 transition-transform duration-200 ease-in-out transform hover:translate-x-2">
          <NavLink
            className="text-base font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 "
            to="/"
          >
            홈으로 돌아가기
            <span aria-hidden="true"> →</span>
          </NavLink>
        </div>
      </div>
    </PageContainer>
  );
};
export default NotFoundError;
