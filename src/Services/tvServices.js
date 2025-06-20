import api from "./api";

export const fetchTVListAringToday = async () => {
  try {
    const res = await api.get("/tv/airing_today");
    return res.data.results;
  } catch (err) {
    console.error("Error fetchTVListAringToday:", err);
    return [];
  }
};

export const fetchTVListOnTheAir = async () => {
  try {
    const res = await api.get("/tv/on_the_air");
    return res.data.results;
  } catch (err) {
    console.error("Error fetchTVListOnTheAir:", err);
    return [];
  }
};

export const fetchTVListPopuler = async () => {
  try {
    const res = await api.get("/tv/popular");
    return res.data.results;
  } catch (err) {
    console.error("Error fetchTVListPopuler:", err);
    return [];
  }
};

export const fetchTVListTopRated = async () => {
  try {
    const res = await api.get("/tv/top_rated");
    return res.data.results;
  } catch (err) {
    console.error("Error fetchTVListTopRated:", err);
    return [];
  }
};

export const fetchTVListById = async (id) => {
  try {
    const res = await api.get(`/tv/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error fetchTVListById:", err);
    return null;
  }
};
