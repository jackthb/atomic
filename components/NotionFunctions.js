export const getAllPosts = async (ID) => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${ID}`
  ).then((res) => res.json());
};
