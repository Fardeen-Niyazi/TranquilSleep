export const getEndTime = (duration: number): string => {
  const endTime = new Date();
  endTime.setMinutes(endTime.getMinutes() + duration);

  return endTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
};
