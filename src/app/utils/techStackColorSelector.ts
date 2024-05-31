export const colorPicker = (index: number) => {
  const colors = [
    "from-purple-500 to-pink-500",
    "from-sky-500 to-indigo-500",
    "from-violet-500 to-fuchsia-500",
    "from-cyan-500 to-blue-500",
    "from-indigo-500 to-violet-500",
  ];
  return colors[index % colors.length];
};
