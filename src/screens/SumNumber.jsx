import React from "react";
import calculator from "./../assets/calculator.png";
import { useState } from "react";

function SumNumber() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [Sum, setSum] = useState("0.00");

  // สร้าง state สำหรับเก็บผลรวม
  const handleInputNum1 = (e) => {
    setNum1(e.target.value);
  };
  // เขียนได้2แบบ แบบแรกคือใช้ฟังก์ชัน handleInputNum1 แบบที่สองคือใช้แบบ onChange={(e) => setNum2(e.target.value)} เขียนตรงอินพุดๆด้เลย
  const handleClear = () => {
    setNum1("");
    setNum2("");
    setSum("0.00");
  };
  
  const handleSum = () => {
    if (num1 === "" || num2 === "") {
      alert("กรุณากรอกตัวเลขในทั้งสองช่อง");
      return;
    }
    // ตรวจสอบว่าค่าที่กรอกเป็นตัวเลขหรือไม่ isNaN มาจาก is Not a Number
    if (isNaN(num1) || isNaN(num2)) {
      alert("กรุณากรอกเฉพาะตัวเลข");
      return;
    }
    const sum = parseFloat(num1) + parseFloat(num2);
    setSum(sum.toFixed(2)); // แสดงผลลัพธ์เป็นทศนิยม 2 ตำแหน่ง
  };
  return (
    <>
      <div
        className="flex flex-col items-center 
                      justify-center h-screen 
                      bg-pink-300"
      >
        <div
          className="flex flex-col items-center 
                      justify-center w-2/4
                      bg-fuchsia-50 shadow-lg
                      rounded-md py-10 px-20"
        >
          <div className="text-xl font-bold  text-pink-500">
            คำนวณผลรวมตัวเลข
          </div>
          <img
            hover:bg-red-700
            src={calculator}
            className="w-2/4 mt-5 mb-4 rounded-b-md "
          />
          <div
            className="text-l font-bold text-rose-800
                          w-full text-left mt-4  "
          >
            {/*w-fullกว้างเต็ม text-left ชิดซ้าย */}
            ป้อนตัวเลขตัวที่1
          </div>
          <div
            className=" text-pink-950
                          w-full text-left mt-1 "
          >
            <input
              type="text" onChange={handleInputNum1}
              value={num1}
              className=" border rounded-sm w-full p-1 bg-rose-100 border-pink-800  "
            />
          </div>
          <div
            className="text-l font-bold text-rose-800
                          w-full text-left mt-6 "
          >
            {" "}
            {/*w-fullกว้างเต็ม text-left ชิดซ้าย */}
            ป้อนตัวเลขตัวที่2 
          </div>
          <div
            className=" text-pink-950
                          w-full text-left mt-1 "
          >
            <input
              type="text" onChange={(e) => setNum2(e.target.value)}
              value={num2}
              className=" border rounded-sm w-full p-1 bg-rose-100 border-pink-800"
            />
          </div>
          <div className="flex mt-5">
            <button onClick={handleClear}
            className="bg-rose-500 hover:bg-red-700 text-white 
                              font-bold py-2 px-4 rounded-lg mt-4 cursor-pointer">
              ยกเลิก
            </button>
            <button onClick={handleSum}
              className="bg-green-500 hover:bg-green-600 text-white 
                              font-bold py-2 px-4 rounded-lg mt-4 mx-2 cursor-pointer">
              คำนวณ
            </button>
          </div>
          <div className=" mt-5  ">
            <span className="text-rose-700 text-xl font-bold"> ผลรวมคือ :</span>
            <span className="text-blue-600 text-4xl font-bold"> {Sum} </span>
          </div>

        </div>
      </div>
    </>
  );
}

export default SumNumber;
