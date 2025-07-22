// components/About.js

export default function About() {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Về Khóa Học
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Khóa học <strong>Tạo Hệ Quản Trị Cơ Sở Dữ Liệu</strong> sẽ giúp bạn
          hiểu rõ từ nền tảng đến nâng cao về cách thiết kế, xây dựng và quản lý
          hệ quản trị cơ sở dữ liệu như MySQL, PostgreSQL, SQL Server...
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Lý Do Bạn Nên Học
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Hiểu sâu về thiết kế cơ sở dữ liệu</li>
              <li>Nắm vững các loại quan hệ và tối ưu truy vấn</li>
              <li>
                Có khả năng triển khai thực tế cho dự án cá nhân và doanh nghiệp
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Bạn Sẽ Học Được Gì?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>1NF → 2NF → 3NF → BCNF</li>
              <li>JOIN, Index, Stored Procedures</li>
              <li>Backup & Restore, Migration</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Phù Hợp Với Ai?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Sinh viên ngành CNTT</li>
              <li>Lập trình viên muốn nâng cao kỹ năng</li>
              <li>Người mới bắt đầu học về backend & database</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
