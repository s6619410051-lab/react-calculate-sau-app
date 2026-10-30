import { Link } from "react-router";
import FormCard, { inputClass } from "../components/FormCard";
import bmrIcon from "../assets/bmr.svg";

export default function Bmr() {
  return (
    <FormCard title="BMR Calculator" subtitle="คำนวณ BMR" image={bmrIcon}>
      <div className="space-y-4">
        <label className="block text-sm text-gray-700">
          น้ำหนัก (กิโลกรัม)
          <input type="number" placeholder="เช่น 60" className={inputClass} />
        </label>
        <label className="block text-sm text-gray-700">
          ส่วนสูง (เซนติเมตร)
          <input type="number" placeholder="เช่น 170" className={inputClass} />
        </label>
        <label className="block text-sm text-gray-700">
          อายุ (ปี)
          <input type="number" placeholder="เช่น 25" className={inputClass} />
        </label>

        <fieldset className="text-sm text-gray-700">
          <legend>เพศ</legend>
          <div className="mt-1 flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="male" defaultChecked /> ชาย
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="female" /> หญิง
            </label>
          </div>
        </fieldset>

        <div className="flex gap-3">
          <button type="button" className="flex-1 rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            คำนวณ BMR
          </button>
          <button type="button" className="flex-1 rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-600">
            ล้าง
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          ค่า BMR ที่คำนวณได้: <span className="font-semibold text-indigo-600">0.00</span>
        </p>

        <Link to="/" className="block w-full rounded-lg bg-gray-100 py-2 text-center text-sm text-gray-700 hover:bg-gray-200">
          กลับหน้าหลัก
        </Link>
      </div>
    </FormCard>
  );
}
