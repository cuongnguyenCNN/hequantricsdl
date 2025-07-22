"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Khóa học này dành cho ai?",
    answer:
      "Khóa học phù hợp với người mới bắt đầu, người muốn chuyển ngành sang lập trình, hoặc người đã có nền tảng muốn củng cố kiến thức.",
  },
  {
    question: "Tôi cần chuẩn bị gì trước khi học?",
    answer:
      "Bạn chỉ cần một máy tính kết nối Internet, tinh thần học hỏi và sẵn sàng thực hành theo hướng dẫn của giảng viên.",
  },
  {
    question: "Có hỗ trợ sau khóa học không?",
    answer:
      "Có. Bạn sẽ được hỗ trợ trong suốt và sau khóa học qua nhóm cộng đồng học viên và kênh chat riêng với giảng viên.",
  },
  {
    question: "Khóa học có hoàn tiền nếu không hài lòng?",
    answer:
      "Chúng tôi cam kết hoàn tiền 100% trong vòng 7 ngày nếu bạn cảm thấy khóa học không phù hợp.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16" id="faq">
      <h2 className="text-3xl font-bold text-center mb-10">
        Câu hỏi thường gặp
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-4 shadow transition-all duration-300 bg-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
