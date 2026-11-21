import { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import FormCard, { inputClass } from "../components/FormCard";
import carIcon from "../assets/car.svg";

const months = [24, 36, 48, 60, 72, 84];
const downPercents = [10, 15, 20, 25, 30];

const fmt = (n) =>
  n.toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function Car() {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [down, setDown] = useState(10);
  const [month, setMonth] = useState(24);
  const [installment, setInstallment] = useState(0);

  const handleCalculate = () => {
    const p = parseFloat(price);
    const r = parseFloat(rate);

    if (!price || !rate) {
      Swal.fire({ icon: "warning", title: "กรอกข้อมูลไม่ครบ", text: "กรุณากรอกราคารถและอัตราดอกเบี้ย", confirmButtonText: "ตกลง" });
      return;
    }
    if (p <= 0 || r < 0) {
      Swal.fire({ icon: "error", title: "ข้อมูลไม่ถูกต้อง", text: "ราคารถต้องมากกว่า 0 และดอกเบี้ยต้องไม่ติดลบ", confirmButtonText: "ตกลง" });
      return;
    }

    const downAmount = (p * down) / 100;           // เงินดาวน์
    const financed = p - downAmount;               // ยอดจัดไฟแนนซ์
    const years = month / 12;
    const interest = financed * (r / 100) * years; // ดอกเบี้ยทั้งหมด
    const total = financed + interest;             // ยอดรวมที่ต้องผ่อน
    const perMonth = total / month;                // ค่างวดต่อเดือน

    setInstallment(perMonth);
    Swal.fire({
      icon: "success",
      title: `ค่างวด ${fmt(perMonth)} บาท/เดือน`,
      html: `
        <div style="text-align:left;line-height:1.8">
          เงินดาวน์ (${down}%): <b>${fmt(downAmount)}</b> บาท<br/>
          ยอดจัดไฟแนนซ์: <b>${fmt(financed)}</b> บาท<br/>
          ดอกเบี้ยรวม: <b>${fmt(interest)}</b> บาท<br/>
          ยอดรวมที่ต้องผ่อน: <b>${fmt(total)}</b> บาท<br/>
          ผ่อน: <b>${month}</b> เดือน
        </div>`,
      confirmButtonText: "ตกลง",
    });
  };

  const handleClear = () => {
    setPrice("");
    setRate("");
    setDown(10);
    setMonth(24);
    setInstallment(0);
  };

  return (
    <FormCard title="Car Installment Calculator" subtitle="คำนวณค่างวดรถยนต์" image={carIcon}>
      <div className="space-y-4">
        <label className="block text-sm text-gray-700">
          ราคารถ (บาท)
          <input type="number" min="0" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="เช่น 800000" className={inputClass} />
        </label>
        <label className="block text-sm text-gray-700">
          อัตราดอกเบี้ย (% ต่อปี)
          <input type="number" min="0" step="0.01" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="เช่น 2.5" className={inputClass} />
        </label>

        <fieldset className="text-sm text-gray-700">
          <legend>เปอร์เซ็นต์เงินดาวน์</legend>
          <div className="mt-1 flex flex-wrap gap-4">
            {downPercents.map((p) => (
              <label key={p} className="flex items-center gap-1">
                <input type="radio" name="down" value={p} checked={down === p} onChange={() => setDown(p)} /> {p}%
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block text-sm text-gray-700">
          ระยะเวลาผ่อน (เดือน)
          <select value={month} onChange={(e) => setMonth(Number(e.target.value))} className={inputClass}>
            {months.map((m) => (
              <option key={m} value={m}>
                {m} เดือน
              </option>
            ))}
          </select>
        </label>

        <div className="flex gap-3">
          <button type="button" onClick={handleCalculate} className="flex-1 rounded-lg bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
            คำนวณ
          </button>
          <button type="button" onClick={handleClear} className="flex-1 rounded-lg bg-gray-200 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300">
            ล้าง
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          ค่างวดต่อเดือน: <span className="font-semibold text-blue-600">{fmt(installment)}</span> บาท
        </p>

        <Link to="/" className="block w-full rounded-lg bg-gray-100 py-2 text-center text-sm text-gray-700 hover:bg-gray-200">
          กลับหน้าหลัก
        </Link>
      </div>
    </FormCard>
  );
}
