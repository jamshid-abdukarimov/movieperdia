export function convertDate(inputDate: string): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  try {
    const [year, month, day] = inputDate.split("-").map(Number);
    const monthName = months[month - 1];

    return `${monthName} ${day}, ${year}`;
  } catch (error) {
    return "";
  }
}
