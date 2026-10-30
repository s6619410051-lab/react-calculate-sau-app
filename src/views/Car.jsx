import { Link } from "react-router";
import FormCard, { inputClass } from "../components/FormCard";
import carIcon from "../assets/car.svg";

const months = [24, 36, 48, 60, 72, 84];
const downPercents = [10, 15, 20, 25, 30];

export default function Car() {
  return (
    <FormCard title="Car Installment Calculator" subtitle="คำนวณค่างวดรถยนต์" image={carIcon}>
      <div className="space-y-4">
        <label className="block text-sm text-gray-700">
          ราคารถ (บาท)
          <input type="number" placeholder="เช่น 800000" className={inputClass} />
        </label>
        <label className="block text-sm text-gray-700">
          อัตราดอกเบี้ย (% ต่อปี)
          <input type="number" placeholder="เช่น 2.5" className={inputClass} />
        </label>

        <fieldset className="text-sm text-gray-700">
          <legend>เปอร์เซ็นต์เงินดาวน์</legend>
          <div className="mt-1 flex flex-wrap gap-4">
            {downPercents.map((p) => (
              <label key={p} className="flex items-center gap-1">
                <input type="radio" name="down" value={p} defaultChecked={p === 10} /> {p}%
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block text-sm text-gray-700">
          ระยะเวลาผ่อน (เดือน)
          <select className={inputClass} defaultValue={24}>
            {months.map((m) => (
              <option key={m} value={m}>
                {m} เดือน
              </option>
            ))}
          </select>
        </label>

        <div className="flex gap-3">
          <button type="button" className="flex-1 rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
            คำนวณ
          </button>
          <button type="button" className="flex-1 rounded-lg bg-gray-200 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
            ล้าง
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          ค่างวดต่อเดือน: <span className="font-semibold text-blue-600">0.00</span> บาท
        </p>

        <Link to="/" className="block w-full rounded-lg bg-gray-100 py-2 text-center text-sm text-gray-700 hover:bg-gray-200">
          กลับหน้าหลัก
        </Link>
      </div>
    </FormCard>
  );
}
