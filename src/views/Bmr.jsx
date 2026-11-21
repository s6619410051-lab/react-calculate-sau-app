import { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import FormCard, { inputClass } from "../components/FormCard";
import bmrIcon from "../assets/bmr.svg";

export default function Bmr() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmr, setBmr] = useState(0);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    if (!weight || !height || !age) {
      Swal.fire({ icon: "warning", title: "กรอกข้อมูลไม่ครบ", text: "กรุณากรอกน้ำหนัก ส่วนสูง และอายุ", confirmButtonText: "ตกลง" });
      return;
    }
    if (w <= 0 || h <= 0 || a <= 0) {
      Swal.fire({ icon: "error", title: "ข้อมูลไม่ถูกต้อง", text: "ทุกค่าต้องมากกว่า 0", confirmButtonText: "ตกลง" });
      return;
    }

    const result =
      gender === "male"
        ? 66 + 13.7 * w + 5 * h - 6.8 * a
        : 665 + 9.6 * w + 1.8 * h - 4.7 * a;

    setBmr(result);
    Swal.fire({
      icon: "success",
      title: `BMR = ${result.toFixed(2)}`,
      text: "แคลอรีที่ร่างกายใช้ต่อวัน (ขณะพักผ่อน)",
      confirmButtonText: "ตกลง",
    });
  };

  const handleClear = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmr(0);
  };

  return (
    <FormCard title="BMR Calculator" subtitle="คำนวณ BMR" image={bmrIcon}>
      <div className="space-y-4">
        <label className="block text-sm text-gray-700">
          น้ำหนัก (กิโลกรัม)
          <input type="number" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="เช่น 60" className={inputClass} />
        </label>
        <label className="block text-sm text-gray-700">
          ส่วนสูง (เซนติเมตร)
          <input type="number" min="0" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="เช่น 170" className={inputClass} />
        </label>
        <label className="block text-sm text-gray-700">
          อายุ (ปี)
          <input type="number" min="0" value={age} onChange={(e) => setAge(e.target.value)} placeholder="เช่น 25" className={inputClass} />
        </label>

        <fieldset className="text-sm text-gray-700">
          <legend>เพศ</legend>
          <div className="mt-1 flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} /> ชาย
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} /> หญิง
            </label>
          </div>
        </fieldset>

        <div className="flex gap-3">
          <button type="button" onClick={handleCalculate} className="flex-1 rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            คำนวณ BMR
          </button>
          <button type="button" onClick={handleClear} className="flex-1 rounded-lg bg-red-500 py-2 text-sm font-medium text-white hover:bg-red-600">
            ล้าง
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          ค่า BMR ที่คำนวณได้: <span className="font-semibold text-indigo-600">{bmr.toFixed(2)}</span>
        </p>

        <Link to="/" className="block w-full rounded-lg bg-gray-100 py-2 text-center text-sm text-gray-700 hover:bg-gray-200">
          กลับหน้าหลัก
        </Link>
      </div>
    </FormCard>
  );
}
