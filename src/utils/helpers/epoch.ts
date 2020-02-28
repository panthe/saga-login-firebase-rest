export const convertFromEpoch = (epoch: number): Date => {
  const dateTemp = new Date(0);
  dateTemp.setUTCSeconds(epoch);
  return dateTemp;
}