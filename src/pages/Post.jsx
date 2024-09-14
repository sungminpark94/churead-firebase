import React from "react";
import { Link } from "react-router-dom";
import PostInput from "../components/PostInput";

const Post = () => {
  return (
    <div>
      <header className="relative px-4 py-6 text-center">
        <Link
          to="/"
          className="absolute left-4 text-churead-gray-300 text-opacity-60"
        >
          취소
        </Link>
        <h3 className="font-bold">새로운 스레드</h3>
      </header>
      <main>
        <form id="post">
          {/* START: 사용자 입력 영역 */}
          <PostInput />
          {/* END: 사용자 입력 영역 */}
          {/* START: 게시 버튼 영역 */}
          <div className="w-full flex items-center fixed bottom-0 lef p-6">
            <p className="text-churead-gray-300 text-opacity-60">
              누구에게나 답글 및 인용 허용
            </p>
            <button
              type="submit"
              className="ml-auto px-5 py-2 bg-white text-churead-black rounded-3xl font-bold"
            >
              게시
            </button>
          </div>
          {/* END: 게시 버튼 영역 */}
        </form>
      </main>
    </div>
  );
};

export default Post;
