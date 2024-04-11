const App = `import {Calendar} from "@nextui-org/react";
import {today, getLocalTimeZone} from "@internationalized/date";
import type {DateValue} from "@internationalized/date";

export default function App() {
  let defaultDate = today(getLocalTimeZone());
  let [focusedDate, setFocusedDate] = React.useState<DateValue>(defaultDate);

  return (
    <Calendar
      aria-label="Date (Controlled Focused Value)"
      focusedValue={focusedDate}
      value={defaultDate}
      onFocusChange={setFocusedDate}
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
