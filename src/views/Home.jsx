import CardMenu from "../components/CardMenu";
import calcIcon from "../assets/calculator.svg";
import bmiIcon from "../assets/bmi.svg";
import bmrIcon from "../assets/bmr.svg";
import carIcon from "../assets/car.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-10">
      <div className="flex flex-col items-center gap-2">
        <img src={calcIcon} alt="" className="h-20 w-20" />
        <h1 className="font-itim text-3xl text-gray-800">เครื่องมือคำนวณออนไลน์</h1>
        <p className="text-sm text-gray-500">เลือกเครื่องมือที่ต้องการใช้งาน</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <CardMenu
          image={bmiIcon}
          title="BMI (ดัชนีมวลกาย)"
          description="คำนวณค่าดัชนีมวลกายจากน้ำหนักและส่วนสูง"
          to="/bmi"
        />
        <CardMenu
          image={bmrIcon}
          title="BMR (อัตราการเผาผลาญ)"
          description="คำนวณพลังงานที่ร่างกายใช้ต่อวัน"
          to="/bmr"
        />
        <CardMenu
          image={carIcon}
          title="ค่างวดรถยนต์"
          description="คำนวณค่างวดรถยนต์ต่อเดือน"
          to="/car"
        />
      </div>

      <div className="mt-10">
        <p className="text-sm text-gray-500">© 2026 CAL-SAU. Reserved. Created by Veerayut SAU</p>
      </div>
    </main>
  );
}
