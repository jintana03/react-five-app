import React from 'react'
import bmi from "./../assets/bmi.jpg"
import { useState } from 'react'

function BmiCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [Bmi, setBmi] = useState("0.00");
  // สร้าง state สำหรับเก็บผลรวม
  const handleInputNum1 = (e) => {
    setNum1(e.target.value);
  };
  const handleInputNum2 = (e) => {
    setNum2(e.target.value);
  }
  const handleClear = () => {
    setNum1('') //น้ำหนัก
    setNum2('') //ส่วนสูง
    setBmi("0.00") // รีเซ็ตค่า BMI
  };
  const handleBmi = () => {
    if (num1 === "" || num2 === "") {
      alert("กรุณากรอกน้ำหนักและส่วนสูง");
      return;
    }
    // ตรวจสอบว่าค่าที่กรอกเป็นตัวเลขหรือไม่ isNaN มาจาก is Not a Number
    if (isNaN(num1) || isNaN(num2)) {
      alert("กรุณากรอกเฉพาะตัวเลข");
      return;
    }
    if (parseFloat(num2) <= 0 || parseFloat(num1) <= 0) {
      alert("กรุณากรอกตัวเลขที่มากกว่า 0");  
      return;
    } 
    if (parseFloat(num2) > 3) {
      alert("กรุณากรอกส่วนสูงเป็นเมตร (เช่น ถ้าสูง 165 cm. ให้ใส่ 1.65)");
      return;
    }
    // คำนวณ BMI = น้ำหนัก (กิโลกรัม) / (ส่วนสูง (เมตร) * ส่วนสูง (เมตร))
    // parseFloat ใช้แปลงสตริงเป็นตัวเลขทศนิยม
    const heightInMeters = parseFloat(num2);
    const weightInKg = parseFloat(num1);
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2)); // แสดงผลลัพธ์เป็นทศนิยม 2 ตำแหน่ง
  };

  return (
    <>
      <div
              className="flex flex-col items-center 
                            justify-center h-screen 
                            bg-pink-300">
              <div
                className="flex flex-col items-center 
                            justify-center w-2/4
                            bg-fuchsia-50 shadow-lg
                            rounded-md py-10 px-20">
                <div className="text-xl font-bold  text-pink-500">
                  คำนวณ BMI
                </div>
                <img
                  src={bmi} className="w-2/5 mt-4 mb-4 rounded-lg shadow-md " />
                <div
                  className="text-l font-bold text-rose-800
                                w-full text-left mt-2  " >{/*w-fullกว้างเต็ม text-left ชิดซ้าย */}
                  ป้อนน้ำหนัก (กิโลกรัม)
                </div>
                <div
                  className=" text-pink-950
                                w-full text-left mt-1 " >
                  <input type="text" onChange={handleInputNum1} value={num1}
                    placeholder="กรุณากรอกน้ำหนัก"
                              className=" border rounded-sm w-full p-1 
                              bg-rose-100 border-pink-800  " />
                </div>
                <div
                  className="text-l font-bold text-rose-800
                                w-full text-left mt-4 " >
                  {/*w-fullกว้างเต็ม text-left ชิดซ้าย */}
                  ป้อนส่วนสูง (เมตร)
                </div>
                <div
                  className=" text-pink-950
                                w-full text-left mt-1 ">
                  <input onChange={handleInputNum2} value={num2}
                    placeholder="กรุณากรอกส่วนสูง"
                    type="text"
                    className=" border rounded-sm w-full p-1 bg-rose-100 border-pink-800"/>
                </div>

                <div className=" flex mt-3 gap-5">
                  <label className='flex items-center gap-2'>
                    <input type="radio" name="gender" value="male" className="accent-pink-600 cursor-pointer" />
                    เพศชาย
                  </label>
                   <label className='flex items-center gap-2'>
                    <input type="radio" name="gender" value="female" className="accent-pink-600 cursor-pointer" /> 
                    เพศหญิง
                  </label>
                </div>
       
                <div className="flex mt-1 gap-5">
                  <button onClick={handleClear} className="bg-rose-500 hover:bg-red-700 text-white 
                                    font-bold py-2 px-4 rounded-lg mt-4 cursor-pointer">
                    ยกเลิก
                  </button>
                  <button onClick={handleBmi} className="bg-green-500 hover:bg-green-600 text-white 
                                    font-bold py-2 px-4 rounded-lg mt-4 mx-2 cursor-pointer">
                    คำนวณ
                  </button>
                </div>
                  <div className=" mt-5  ">
            <span className="text-rose-700 text-xl font-bold"> ผลรวม BMI คือ :</span>
            <span className="text-blue-600 text-4xl font-bold"> {Bmi} </span>
            <div className="mt-3 text-lg font-semibold text-center text-pink-800">
              {(() => {
                const bmiNum = parseFloat(Bmi);
                if (bmiNum === 0) return null;
                if (bmiNum < 18.5) return "น้ำหนักน้อย / ผอม";
                if (bmiNum <= 24) return "น้ำหนักปกติ (สุขภาพดี)";
                if (bmiNum <= 25) return "น้ำหนักเกิน";
                if (bmiNum <= 30) return "อ้วนระดับ 1 (อ้วนเล็กน้อย)";
                return "อ้วนระดับ 2 (อ้วนอันตราย)";
              })()}
            </div>
          </div>                
              </div>
            </div>
    </>
  )
}

export default BmiCalculator