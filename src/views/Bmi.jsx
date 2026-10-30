import { Link } from "react-router";
import FormCard, { inputClass } from "../components/FormCard";
import bmiIcon from "../assets/bmi.svg";

export default function Bmi() {
  return (
    <FormCard title="BMI Calculator" subtitle="คำนวณ BMI" image={bmiIcon}>
      <div className="space-y-4">
        <label className="block text-sm text-gray-700">
          น้ำหนัก (กิโลกรัม)
          <input type="number" placeholder="เช่น 60" className={inputClass} />
        </label>
        <label className="block text-sm text-gray-700">
          ส่วนสูง (เซนติเมตร)
          <input type="number" placeholder="เช่น 170" className={inputClass} />
        </label>

        <button type="button" className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
          คำนวณ BMI
        </button>
        <button type="button" className="w-full rounded-lg bg-gray-200 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
          ล้าง
        </button>

        <p className="text-center text-sm text-gray-600">
          ค่า BMI ที่คำนวณได้: <span className="font-semibold text-blue-600">0.00</span>
        </p>

        <Link to="/" className="block w-full rounded-lg bg-gray-100 py-2 text-center text-sm text-gray-700 hover:bg-gray-200">
          กลับหน้าหลัก
        </Link>
      </div>
    </FormCard>
  );
}
