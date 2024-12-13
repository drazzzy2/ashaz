import React, { createContext, useContext, useState } from 'react';

interface SuccessStoriesContextType {
  showSuccessStories: boolean;
  toggleSuccessStories: () => void;
  hideSuccessStories: () => void;
  showSuccessStoriesView: () => void;
}

const SuccessStoriesContext = createContext<SuccessStoriesContextType | undefined>(undefined);

export function SuccessStoriesProvider({ children }: { children: React.ReactNode }) {
  const [showSuccessStories, setShowSuccessStories] = useState(false);

  const toggleSuccessStories = () => setShowSuccessStories(prev => !prev);
  const hideSuccessStories = () => setShowSuccessStories(false);
  const showSuccessStoriesView = () => setShowSuccessStories(true);

  return (
    <SuccessStoriesContext.Provider 
      value={{ 
        showSuccessStories, 
        toggleSuccessStories, 
        hideSuccessStories,
        showSuccessStoriesView
      }}
    >
      {children}
    </SuccessStoriesContext.Provider>
  );
}

export function useSuccessStories() {
  const context = useContext(SuccessStoriesContext);
  if (context === undefined) {
    throw new Error('useSuccessStories must be used within a SuccessStoriesProvider');
  }
  return context;
}