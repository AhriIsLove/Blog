
import { useState } from "react";

function LoginComponent({ onClose }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Only password check
    if (password === "ahrilove") {
      sessionStorage.setItem("auth", "admin");
      setError("");
      if (onClose) onClose();
      window.location.reload();
    } else {
      setError("비밀번호가 올바르지 않습니다.");
      setTimeout(() => {
        window.history.back();
      }, 800);
    }
  };

		return (
			<div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-40 flex items-center justify-center z-[1000]">
				<div className="bg-white rounded-lg px-10 py-8 min-w-[320px] shadow-lg flex flex-col gap-5 relative">
					<h2 className="text-center mb-2 text-2xl font-bold">로그인</h2>
					<form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            autoFocus // 자동으로 포커스 설정
                            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-myMainColor-200"
                        />
						{error && <div className="text-red-500 text-sm">{error}</div>}
						<div className="flex flex-row gap-2 mt-2">
							<button
								type="submit"
								className="flex-1 p-2 rounded bg-myFontColor-600 text-white font-bold hover:bg-myFontColor-700 transition-colors"
							>
								로그인
							</button>
							<button
								type="button"
								onClick={() => window.history.back()}
								className="flex-1 p-2 rounded bg-gray-300 text-black font-bold hover:bg-gray-400 transition-colors"
							>
								취소
							</button>
						</div>
					</form>
				</div>
			</div>
		);
}

export default LoginComponent;
