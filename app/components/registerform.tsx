// components/RegisterForm.jsx
"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      debugger;
      await fetch(
        "https://script.google.com/macros/s/AKfycbwO77ySThZFfENRzk9pio60jo3fRmY1N9iIkAn-bydMsRlsj-lVH0vwbjstjB5iN-O2/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSubmitted(true);
    } catch (err) {
      console.error("Gửi dữ liệu thất bại", err);
    }
    setSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Đăng Ký Khóa Học Ngay
        </h2>
        {submitted ? (
          <p className="text-green-600 text-center text-lg">
            Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700">
                Họ và Tên
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700">
                Lý do muốn học
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                className="w-full mt-1 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Bạn mong muốn điều gì sau khóa học?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Gửi Đăng Ký
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
