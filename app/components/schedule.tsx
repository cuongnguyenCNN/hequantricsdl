// components/Schedule.jsx
export default function Schedule() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-20" id="schedule">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-700">
          Lịch Học Khóa Hệ Quản Trị Cơ Sở Dữ Liệu
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Bạn có thể chọn ca học phù hợp với thời gian cá nhân.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Ca Sáng",
              time: "Thứ 2 - Thứ 4 - Thứ 6 (9:00 - 11:00)",
              description: "Phù hợp với sinh viên hoặc người làm việc tự do.",
            },
            {
              title: "Ca Tối",
              time: "Thứ 3 - Thứ 5 (19:30 - 21:30)",
              description: "Dành cho người đi làm, học ngoài giờ hành chính.",
            },
            {
              title: "Cuối Tuần",
              time: "Thứ 7 & Chủ nhật (14:00 - 17:00)",
              description: "Linh hoạt cho người bận rộn trong tuần.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-xl p-6 rounded-2xl border-t-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-700">
                {item.title}
              </h3>
              <p className="text-gray-700 font-medium">{item.time}</p>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
