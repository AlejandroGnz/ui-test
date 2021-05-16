function getPercentageDiff(ANumber: number, BNumber: number): number[] {
  const totalSum = ANumber + BNumber;
  const aPercentage = (ANumber / totalSum) * 100;
  const bPercentage = 100 - aPercentage;

  return [aPercentage, bPercentage];
}

export default getPercentageDiff;
