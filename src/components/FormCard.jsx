// กรอบการ์ดขาวกลางหน้า ใช้ซ้ำในหน้า Bmi / Bmr / Car
export default function FormCard({ title, subtitle, image, children }) {
  return (
    <main className="flex min-h-screen items-start justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-center text-xl font-semibold text-gray-800">{title}</h1>
        <p className="text-center text-sm text-gray-500">{subtitle}</p>
        <img src={image} alt="" className="mx-auto my-5 h-24 w-24 object-contain" />
        {children}
      </section>
    </main>
  );
}

export const inputClass =
  "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200";
