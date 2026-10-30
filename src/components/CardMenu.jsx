import { Link } from "react-router";

// props: image (รูปภาพ), title (ชื่อเมนู), description (รายละเอียด), to (route path)
export default function CardMenu({ image, title, description, to }) {
  return (
    <Link
      to={to}
      className="flex w-56 flex-col items-center gap-2 rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-blue-600"
    >
      <img src={image} alt={title} className="h-24 w-24 object-contain" />
      <h2 className="text-base font-semibold text-gray-800">{title}</h2>
      <p className="text-xs text-gray-500">{description}</p>
    </Link>
  );
}
