import Image from "next/image";

export default function Instructor() {
  return (
    <section className="py-20 bg-white" id="instructor">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-6">Giảng viên khóa học</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-48 h-48 relative">
            <Image
              src="/instructor.jpg" // Thay ảnh thật tại đây
              alt="Giảng viên"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="text-left max-w-xl">
            <h3 className="text-2xl font-semibold mb-2">Nguyễn Văn A</h3>
            <p className="text-gray-700 mb-4">
              Thạc sĩ Khoa học máy tính - Đại học Bách Khoa. Hơn 10 năm kinh
              nghiệm trong ngành phần mềm, giảng dạy tại nhiều trung tâm lớn như
              VTC Academy, FUNiX, Aptech.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Chuyên gia Cơ sở dữ liệu & Kiến trúc hệ thống</li>
              <li>Giảng viên yêu thích tại VTC Academy 2019-2023</li>
              <li>Đào tạo hơn 2.000 học viên thành công</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
