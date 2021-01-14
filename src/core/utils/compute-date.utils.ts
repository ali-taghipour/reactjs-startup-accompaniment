let year: any = []
const month = [
  [{ id: 1, title: "فرودین" }],
  [{ id: 2, title: "اردیبهشت" }],
  [{ id: 3, title: "خرداد" }],
  [{ id: 4, title: "تیر" }],
  [{ id: 5, title: "مرداد" }],
  [{ id: 6, title: "شهریور" }],
  [{ id: 7, title: "مهر" }],
  [{ id: 8, title: "آبان" }],
  [{ id: 9, title: "آذر" }],
  [{ id: 10, title: "دی" }],
  [{ id: 11, title: "بهمن" }],
  [{ id: 12, title: "اسفند" }],
]

export const creatingYearList = (currentYear: number) => {
  let set = new Set()
  const startDate: number = currentYear - 99
  let i: number
  for (i = startDate; i < currentYear + 1; i++) {
    set.add([{ id: i, title: `${i}` }])
  }
  year = Array.from(set)
  return year
}

export const creatingMonthList = month

export const CreatingDayList = (selectedYear, selectedMonth) => {
  let set = new Set()
  if (selectedYear !== 0) {
    /* computing kabise year */
    // let kabise = false;
    let i
    // const absolute = Math.abs(selectedYear - 1398);
    // if(absolute % 4 === 0){
    //     kabise = true;
    // }
    if (selectedMonth < 7) {
      for (i = 1; i < 32; i++) {
        set.add([{ id: i, title: `${i}` }])
      }
    } else {
      if (selectedMonth === 12) {
        for (i = 1; i < 30; i++) {
          set.add([{ id: i, title: `${i}` }])
        }
      } else {
        for (i = 1; i < 31; i++) {
          set.add([{ id: i, title: `${i}` }])
        }
      }
    }
  }
  return Array.from(set)
}
