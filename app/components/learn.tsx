// components/Learn.js
export default function Learn() {
  const learnItems = [
    "Thiết kế và triển khai hệ quản trị cơ sở dữ liệu từ đầu.",
    "Nắm vững các chuẩn 1NF, 2NF, 3NF và cách chuẩn hóa dữ liệu.",
    "Tối ưu hóa câu lệnh SQL và sử dụng chỉ mục (index) hiệu quả.",
    "Hiểu sâu về JOIN, Transaction, Stored Procedure, Trigger, View.",
    "Xây dựng hệ thống sao lưu, phục hồi và bảo mật dữ liệu.",
    "Ứng dụng thực tế với MySQL, PostgreSQL và SQL Server.",
  ];

  return (
    <section className="py-16 bg-gray-100" id="learn">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">
          Bạn sẽ học được gì?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Những kiến thức thực tiễn và kỹ năng nền tảng để xây dựng hệ thống cơ
          sở dữ liệu chuyên nghiệp
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {learnItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-600 text-2xl font-bold">
                  {idx + 1}.
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
