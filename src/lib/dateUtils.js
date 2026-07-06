// Parse YYYY-MM-DD in local time to avoid UTC off-by-one issues
function parseLocal(str) {
  const [y, m, d] = str.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function calculateAge(birthDateStr) {
  const birth = parseLocal(birthDateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (birth > today) return null;

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((today - birth) / 86400000);

  // Next birthday
  const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBirthday <= today) nextBirthday.setFullYear(today.getFullYear() + 1);
  const daysUntilBirthday = Math.floor((nextBirthday - today) / 86400000);
  const isTodayBirthday = daysUntilBirthday === 0;

  const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const dayOfWeek = DAYS[birth.getDay()];

  return {
    years, months, days,
    totalDays,
    totalWeeks: Math.floor(totalDays / 7),
    daysUntilBirthday,
    isTodayBirthday,
    dayOfWeek,
  };
}

export function calculateDateDiff(startStr, endStr) {
  const start = parseLocal(startStr);
  const end = parseLocal(endStr);

  const earlier = start <= end ? start : end;
  const later = start <= end ? end : start;
  const isNegative = start > end;

  let years = later.getFullYear() - earlier.getFullYear();
  let months = later.getMonth() - earlier.getMonth();
  let days = later.getDate() - earlier.getDate();

  if (days < 0) {
    months--;
    days += new Date(later.getFullYear(), later.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((later - earlier) / 86400000);

  return {
    years, months, days,
    totalDays: isNegative ? -totalDays : totalDays,
    totalWeeks: Math.floor(totalDays / 7),
    isNegative,
  };
}

export function todayString() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
