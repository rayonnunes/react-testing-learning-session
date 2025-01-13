export const getResource = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ data: "Resource" });
      } else {
        reject(new Error("Request failed"));
      }
    }, 500);
  });
};

export const getResourceID = (params) => {
  const { id } = params;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ data: `Resource ${id}` });
      } else {
        reject(new Error("Request failed"));
      }
    }, 500);
  });
};
