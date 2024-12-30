
export default function Section({ icon, title, content, image }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center p-6 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-white shadow-sm">{icon}</div>
          <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </div>
      <div className="w-full md:w-1/3 aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
