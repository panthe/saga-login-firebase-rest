export const convertFromEpoch = (epoch: number): Date => {
  let dateTemp = new Date(0);
  dateTemp.setUTCSeconds(epoch);
  return dateTemp;
}