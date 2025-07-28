// components/Projects.js
const projects = [
  {
    title: "LinkPost",
    description: "Ứng dụng rút gọn và quản lý link với phân tích người dùng.",
    link: "https://linkpost.app", // thay bằng link thật nếu có
  },
  {
    title: "NoteFlowAI",
    description: "Trợ lý AI ghi chú, tóm tắt nội dung thông minh.",
    link: "https://noteflow.ai", // thay bằng link thật nếu có
  },
  {
    title: "Facebook Auto Friend Chrome Extension",
    description:
      "A Chrome Extension for sending automated friend requests with filters and safety features.",
    link: "https://github.com/yourusername/fb-auto-friend",
  },
  {
    title: "Stand Up Reminder+",
    description:
      "A freemium Chrome Extension reminding users to stand up with light exercises, sounds, and analytics.",
    link: "https://chrome.google.com/webstore/detail/stand-up-reminder/id-of-extension",
  },
];

export default function Projects() {
  return (
    <section className="py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <span className="text-blue-500 font-medium">View Project →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
