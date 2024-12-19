// src/hooks/useBookmarkReducer.ts

import { useReducer } from "react";

// Reducer function for managing bookmark state
const bookmarkReducer = (
  state: Record<string, boolean>,
  action: { type: string; id: string }
) => {
  switch (action.type) {
    case "TOGGLE_BOOKMARK":
      return {
        ...state,
        [action.id]: !state[action.id], // Toggle the specific newsletter's bookmark status
      };
    default:
      return state;
  }
};

// Custom hook that uses the reducer for bookmarks
export const useBookmark = () => {
  const [bookmarkedNewsletters, dispatch] = useReducer(bookmarkReducer, {});

  // Dispatch action to toggle bookmark
  const toggleBookmark = (newsletterId: string) => {
    dispatch({ type: "TOGGLE_BOOKMARK", id: newsletterId });
  };

  return { bookmarkedNewsletters, toggleBookmark };
};
