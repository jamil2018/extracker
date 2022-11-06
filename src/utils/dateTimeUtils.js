const convertTimeToLocaleString = (time) => {
  return time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const calcTimeDiffInHrs = (fromTime, toTime) => {
  const hour = 1000 * 3600;
  const difference = (toTime.getTime() - fromTime.getTime()) / hour;
  return difference;
};

export { convertTimeToLocaleString, calcTimeDiffInHrs };
