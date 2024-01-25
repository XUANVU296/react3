import React, { useState } from 'react';

function Selection() {
  // Khởi tạo danh sách carList và colorList
  const carList = ['Car1', 'Car2', 'Car3'];
  const colorList = ['Red', 'Blue', 'Green'];

  // Khai báo và khởi tạo state cho selectedCar
  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  // Function handle sự kiện chọn car
  const handleCarChange = (event) => {
    const selectedCarValue = event.target.value;
    setSelectedCar((previousState) => {
      return { ...previousState, car: selectedCarValue };
    });
  };

  // Function handle sự kiện chọn color
  const handleColorChange = (event) => {
    const selectedColorValue = event.target.value;
    setSelectedCar((previousState) => {
      return { ...previousState, color: selectedColorValue };
    });
  };

  // Hàm trả về React element
  const renderUI = () => {
    return (
      <div>
        <h1>Chọn xe và màu sắc</h1>
        <label>Chọn xe:</label>
        <select value={selectedCar.car} onChange={handleCarChange}>
          {carList.map((car) => (
            <option key={car} value={car}>
              {car}
            </option>
          ))}
        </select>

        <label>Chọn màu sắc:</label>
        <select value={selectedCar.color} onChange={handleColorChange}>
          {colorList.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>

        <p>Đã chọn: {selectedCar.car} - {selectedCar.color}</p>
      </div>
    );
  };

  return renderUI();
}

export default Selection;

