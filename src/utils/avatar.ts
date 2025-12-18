export const getRandomSeed = () => {
  return Math.random().toString(36).substring(2, 10);
};

export const getAvatarUrl = (seed: string) => {
  return `https://api.dicebear.com/7.x/avataaars/png?seed=${seed}`;
};
