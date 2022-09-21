export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export const roundToMinutes = (seconds) => {
  return Math.floor(seconds / 60) + 1;
}