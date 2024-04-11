const App = `import {Calendar} from "@nextui-org/react";
import {today, getLocalTimeZone, isWeekend} from "@internationalized/date";
import type {DateValue} from "@internationalized/date";
import {useLocale} from "@react-aria/i18n";


export default function App() {
  let [date, setDate] = React.useState<DateValue>(today(getLocalTimeZone()));
  let {locale} = useLocale();
  let isInvalid = isWeekend(date, locale);

  return (
    <Calendar
      aria-label="Date (Invalid on weekends)"
      errorMessage={isInvalid ? "We are closed on weekends" : undefined}
      isInvalid={isInvalid}
      value={date}
      onChange={setDate}
    />
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};
