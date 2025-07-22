import { BookOpen } from "lucide-react";

export default function Curriculum() {
  const modules = [
    {
      title: "Module 1: Tổng quan về Hệ Quản Trị Cơ Sở Dữ Liệu (DBMS)",
      lessons: [
        "Khái niệm và vai trò của DBMS",
        "Các loại hệ quản trị phổ biến (MySQL, PostgreSQL, MongoDB,...)",
        "Cài đặt và làm quen với môi trường làm việc",
      ],
    },
    {
      title: "Module 2: Thiết kế cơ sở dữ liệu & Chuẩn hóa",
      lessons: [
        "Mô hình thực thể - liên kết (ERD)",
        "Chuyển ERD sang lược đồ quan hệ",
        "Chuẩn hóa dữ liệu (1NF, 2NF, 3NF)",
      ],
    },
    {
      title: "Module 3: Ngôn ngữ SQL từ cơ bản đến nâng cao",
      lessons: [
        "Tạo bảng, thêm, sửa, xóa dữ liệu",
        "Các loại JOIN và cách tối ưu",
        "Subqueries, Views, Index",
      ],
    },
    {
      title: "Module 4: Bảo mật và Tối ưu hóa",
      lessons: [
        "Phân quyền người dùng",
        "Backup & Restore",
        "Tối ưu truy vấn và hiệu suất hệ thống",
      ],
    },
    {
      title: "Module 5: Project thực tế cuối khóa",
      lessons: [
        "Phân tích yêu cầu & thiết kế hệ thống",
        "Xây dựng database hoàn chỉnh",
        "Trình bày & phản biện với mentor",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20" id="curriculum">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Lộ trình học chi tiết
        </h2>
        <div className="grid gap-6">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                {mod.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 pl-1">
                {mod.lessons.map((lesson, i) => (
                  <li key={i}>{lesson}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
