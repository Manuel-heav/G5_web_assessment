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
}

const initialState: BlogsState = {
  blogs: [],
  displayedBlogs: [],
  loading: false,
  error: null,
  currentPage: 1,
  postsPerPage: 10, // Number of posts per page
};

// Fetch all blogs action
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
      state.displayedBlogs = state.blogs.slice(
        (action.payload - 1) * state.postsPerPage,
        action.payload * state.postsPerPage
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
        // Set the initial page of displayed blogs
        state.displayedBlogs = action.payload.slice(0, state.postsPerPage);
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { setCurrentPage } = blogsSlice.actions;
export default blogsSlice.reducer;
