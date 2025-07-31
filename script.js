function calculateAge() {
  const dobInput = document.getElementById("dob").value.trim();
  const resultDiv = document.getElementById("result");

  // Validate format: DD-MM-YYYY
  const datePattern = /^(\d{2})-(\d{2})-(\d{4})$/;
  const match = dobInput.match(datePattern);

  if (!match) {
    resultDiv.innerText = "Please enter the date in DD-MM-YYYY format.";
    return;
  }

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10) - 1; // Month is 0-indexed
  const year = parseInt(match[3], 10);

  const dob = new Date(year, month, day);
  const today = new Date();

  if (isNaN(dob.getTime()) || dob > today) {
    resultDiv.innerText = "Please enter a valid past date.";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultDiv.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;
}
