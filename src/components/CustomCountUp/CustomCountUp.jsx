import CountUp from "react-countup";

export default function CustomCountUp({ start, end, duration, delay }) {
  return (
    <CountUp
      start={start || 0}
      end={end}
      duration={duration || 5}
      separator=" "
      enableScrollSpy={true}
      delay={delay || 0}
      scrollSpyOnce
    />
  );
}
