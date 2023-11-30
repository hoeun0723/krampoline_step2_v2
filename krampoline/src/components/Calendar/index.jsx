const Calendar = ({ value, onChange }) => {
  return (
    <input
      type="date"
      placeholder="Choose Date"
      required
      value={value}
      onChange={onChange}
    />
  );
};

export default Calendar;
