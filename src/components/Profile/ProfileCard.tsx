const ProfileCard = () => {
  return (
    <div className="col-span-4 md:col-span-4 md:px-0 px-8">
      <div className="bg-white shadow rounded-lg p-5">
        <div className="flex flex-col items-left gap-10 ">
          <img
            src="userImg"
            className="w-48 h-48 bg-gray-300 rounded-full mb-4 shrink-0 mx-auto"
          ></img>
          <h1 className="text-xl font-bold">
            userName(사용자이름) + userRole(사용자 역할)
          </h1>
          <div>
            <p>관심분야</p>
            <p>FE</p>
          </div>
          <div>
            <p>이메일</p>
            <p>userEmail</p>
          </div>
          <div>
            <p>전화번호</p>
            <p>userPhn</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
