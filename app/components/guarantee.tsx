// components/Guarantee.js

export default function Guarantee() {
  return (
    <section className="bg-green-50 py-16 px-4 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">
          Cam Kết Từ Khóa Học
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Bạn sẽ được hoàn tiền 100% nếu sau 7 ngày học mà cảm thấy khóa học
          không phù hợp hoặc không giúp bạn tiến bộ như mong đợi.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Hoàn tiền trong 7 ngày
            </h3>
            <p className="text-gray-600">
              Nếu bạn cảm thấy khóa học không phù hợp, chúng tôi hoàn lại học
              phí không hỏi lý do.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Chất lượng giảng dạy
            </h3>
            <p className="text-gray-600">
              Đảm bảo bạn hiểu được từng phần thông qua bài giảng chi tiết và
              bài tập thực tế.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              Hỗ trợ tận tâm
            </h3>
            <p className="text-gray-600">
              Hỗ trợ 1-1 qua nhóm Zalo, livestream hàng tuần giải đáp mọi thắc
              mắc của bạn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
