function computeAge(birthDate, currentDate) {
  if (birthDate == null || birthDate == undefined || currentDate == null || currentDate == undefined)
    throw new Error("birthDate and currentDate must be defined");
  let age = currentDate.getFullYear() - birthDate.getFullYear() - 1;
  if (currentDate.getMonth() > birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() >= birthDate.getDate())) {
    age++;
  }
  return age;
}

module.exports = computeAge;