import { Result } from "postcss";
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
export const fetchPersonListFiltered = async () => {
  try {
    const res = await api.get(`/person/popular`);
    return res.data.results;
  } catch (err) {
    console.error("Error fetchPersonListFiltered:", err);
    return null;
  }
};
