import api from "./api";

export const fetchPersonById = async (id) => {
  try {
    const res = await api.get(`/person/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error fetchPersonById:", err);
    return null;
  }
};
