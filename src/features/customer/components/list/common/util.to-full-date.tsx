const toFullDate = (jsonDate: string) => {
  const date = new Date(jsonDate);

  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export default toFullDate;
