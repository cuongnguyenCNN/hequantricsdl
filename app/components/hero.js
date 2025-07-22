// components/Hero.js
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-indigo-700 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Khóa Học Tạo Hệ Quản Trị Cơ Sở Dữ Liệu <br />
            <span className="text-yellow-300">Từ Cơ Bản Đến Nâng Cao</span>
          </h1>
          <p className="text-lg mb-8">
            Biến bạn thành một chuyên gia về Database chỉ trong 6 tuần. Học từ
            các chuyên gia thực chiến, thực hành liên tục, hỗ trợ trọn đời.
          </p>
          <a
            href="#register"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
          >
            Đăng Ký Ngay
          </a>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/images/hero-database.svg"
            alt="Database Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
