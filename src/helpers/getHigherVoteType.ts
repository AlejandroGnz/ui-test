function getHigherVoteType(positive: number, negative: number): "up" | "down" {
  const maxNumb = Math.max(positive, negative);
  const type = maxNumb === positive ? "up" : "down";

  return type;
}

export default getHigherVoteType;
