const buildVisitStatistics = (data, dateStart, dateEnd) => {
  let start = Date.parse(dateStart);
  let end = Date.parse(dateEnd);
  filteredData = data.filter(
    e => Date.parse(e.date) > start && Date.parse(e.date) < end
  );
  filteredData.sort((a, b) => a.id - b.id);
  let result = [];
  while (filteredData.length) result.push(getResultById(filteredData));
  return result;
};
function getResultById() {
  let validData = filteredData
    .filter(e => e.id == filteredData[0].id)
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  filteredData.splice(0, validData.length);
  let obj = {};
  let timeIn = 0;
  let timeOut = 0;
  let countIn = 0;
  let countOut = 0;
  if (validData.length > 1) {
    validData.forEach((item, index, arr) => {
      if (item.type === "in" && arr[index + 1].type === "out") {
        timeIn += Date.parse(item.date);
      }
      if (item.type === "out" && arr[index - 1].type === "in") {
        timeOut += Date.parse(item.date);
      }
      if (item.type === "in") countIn++;
      if (item.type === "out") countOut++;
    });
    let time = ((timeOut - timeIn) / (1000 * 60 * 60)).toFixed(1);
    obj.id = validData[0].id;
    obj.time = time;
    let timeVisits = validData.some(
      e =>
        Number(e["date"].split("T")[1].split(":")[0]) < 23 &&
        Number(e["date"].split("T")[1].split(":")[0]) > 6
    );
    obj.hasSuspiciousVisits =
      (countIn - countOut === 0 || countIn - countOut > 0) && timeVisits
        ? false
        : true;
  } else {
    obj.id = validData[0].id;
    obj.time = undefined;
    obj.hasSuspiciousVisits = true;
  }
  return obj;
}
