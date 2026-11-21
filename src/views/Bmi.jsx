import { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import FormCard, { inputClass } from "../components/FormCard";
import bmiIcon from "../assets/bmi.svg";

// แปลผลตามเกณฑ์ BMI สำหรับคนเอเชีย
function getBmiResult(bmi) {
  if (bmi < 18.5) return { text: "น้ำหนักต่ำกว่าเกณฑ์", icon: "info" };
  if (bmi < 23) return { text: "สมส่วน", icon: "success" };
  if (bmi < 25) return { text: "น้ำหนักเกิน (ท้วม)", icon: "warning" };
  if (bmi < 30) return { text: "อ้วน", icon: "warning" };
  return { text: "อ้วนมาก", icon: "error" };
}

export default function Bmi() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(0);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!weight || !height) {
      Swal.fire({ icon: "warning", title: "กรอกข้อมูลไม่ครบ", text: "กรุณากรอกน้ำหนักและส่วนสูง", confirmButtonText: "ตกลง" });
      return;
    }
    if (w <= 0 || h <= 0) {
      Swal.fire({ icon: "error", title: "ข้อมูลไม่ถูกต้อง", text: "น้ำหนักและส่วนสูงต้องมากกว่า 0", confirmButtonText: "ตกลง" });
      return;
    }

    const result = w / Math.pow(h / 100, 2); // ส่วนสูง ซม. -> เมตร
    setBmi(result);

    const { text, icon } = getBmiResult(result);
    Swal.fire({
      icon,
      title: `BMI = ${result.toFixed(2)}`,
      text: `ผลการประเมิน: ${text}`,
      confirmButtonText: "ตกลง",
    });
  };

  const handleClear = () => {
    setWeight("");
    setHeight("");
    setBmi(0);
  };

  return (
    <FormCard title="BMI Calculator" subtitle="คำนวณ BMI" image={bmiIcon}>
      <div className="space-y-4">
        <label className="block text-sm text-gray-700">
          น้ำหนัก (กิโลกรัม)
          <input type="number" min="0" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="เช่น 60" className={inputClass} />
        </label>
        <label className="block text-sm text-gray-700">
          ส่วนสูง (เซนติเมตร)
          <input type="number" min="0" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="เช่น 170" className={inputClass} />
        </label>

        <button type="button" onClick={handleCalculate} className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
          คำนวณ BMI
        </button>
        <button type="button" onClick={handleClear} className="w-full rounded-lg bg-gray-200 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
          ล้าง
        </button>

        <p className="text-center text-sm text-gray-600">
          ค่า BMI ที่คำนวณได้: <span className="font-semibold text-blue-600">{bmi.toFixed(2)}</span>
        </p>

        <Link to="/" className="block w-full rounded-lg bg-gray-100 py-2 text-center text-sm text-gray-700 hover:bg-gray-200">
          กลับหน้าหลัก
        </Link>
      </div>
    </FormCard>
  );
}
