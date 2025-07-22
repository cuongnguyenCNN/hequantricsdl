// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">Khóa học CSDL</h2>
          <p>
            Học cách xây dựng hệ quản trị cơ sở dữ liệu từ cơ bản đến nâng cao.
            Tăng kỹ năng, tăng thu nhập.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Liên hệ</h3>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:khoahoc@csdl.vn" className="hover:underline">
                khoahoc@csdl.vn
              </a>
            </li>
            <li>Hotline: 0988 123 456</li>
            <li>
              Facebook:{" "}
              <a href="https://fb.me/khoahoccsdl" className="hover:underline">
                fb.me/khoahoccsdl
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Điều khoản</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Chính sách hoàn tiền
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bảo mật thông tin
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Khóa học CSDL. All rights reserved.
      </div>
    </footer>
  );
}
