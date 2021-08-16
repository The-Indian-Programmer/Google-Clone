export const searchTerm = (data) => {
  return {
    type: "SEARCHTERM",
    payload: data,
  };
};
export const setLoading = (data) => {
  return {
    type: "SETLOADING",
    payload: data,
  };
};
