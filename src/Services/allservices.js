import api from "./api";

export const fetchMultiSearch = async (query) => {
  if (!query) return [];
  try {
    const res = await api.get("/search/multi", { params: { query } });
    return res.data.results;
  } catch (err) {
    console.error("Error fetchMultiSearch:", err);
    return [];
  }
};
