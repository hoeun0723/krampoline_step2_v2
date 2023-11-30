import React, { useState } from "react";
import * as S from "./Calendar.style";

const Calendar = ({ value, onChange, placeholder, title }) => {
  const [selectedDate, setSelectedDate] = useState(value);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.DateInput
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText={placeholder}
        dateFormat="yyyy-MM-dd"
      />
    </S.Container>
  );
};

export default Calendar;
