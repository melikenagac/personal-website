import { api } from "./api";

export const blogServices = {
  getBlogs: async (per_page = 5, page = 1) => api.get(`/posts?per_page=${per_page}&page=${page}`),
  getContent: async (url: string) => api.get(`/posts/${url}`),
  getBlogMedia: async (id: string) => api.get(`/media/${id}`)
}