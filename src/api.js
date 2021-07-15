import data from "./data.json";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getFiles = async () => {
  await delay(1000);
  return data;
};
