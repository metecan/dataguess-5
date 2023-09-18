export const dateConverter = (date: string): string => {
  const dateObj = new Date(date);
  const currentDate = new Date();
  const diff = currentDate.getTime() - dateObj.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  if (hours < 24) {
    return `${hours} hours ago`;
  }
  if (hours < 48) {
    return `Yesterday`;
  }
  return `${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`;
};
