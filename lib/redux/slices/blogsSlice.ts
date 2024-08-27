import { BlogPost } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BlogsState {
  blogs: BlogPost[];
  displayedBlogs: BlogPost[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  postsPerPage: number;
  searchQuery: string;
}

const initialState: BlogsState = {
  blogs: [],
  displayedBlogs: [],
  loading: false,
  error: null,
  currentPage: 1,
  postsPerPage: 5,
  searchQuery: "",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get<BlogPost[]>(
    "https://a2sv-backend.onrender.com/api/blogs"
  );
  return response.data;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
      const filteredBlogs = state.searchQuery
        ? state.blogs.filter((blog) =>
            blog.title.toLowerCase().includes(state.searchQuery.toLowerCase())
          )
        : state.blogs;
      state.displayedBlogs = filteredBlogs.slice(
        (action.payload - 1) * state.postsPerPage,
        action.payload * state.postsPerPage
      );
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      const filteredBlogs = state.blogs.filter((blog) =>
        blog.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.displayedBlogs = filteredBlogs.slice(
        (state.currentPage - 1) * state.postsPerPage,
        state.currentPage * state.postsPerPage
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        const filteredBlogs = action.payload.filter((blog) =>
          blog.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        );
        state.displayedBlogs = filteredBlogs.slice(0, state.postsPerPage);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { setCurrentPage, setSearchQuery } = blogsSlice.actions;
export default blogsSlice.reducer;
