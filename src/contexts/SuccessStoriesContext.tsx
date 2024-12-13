import React, { createContext, useContext, useState } from 'react';
import { successStories } from '../data/successStories';
import { SuccessStory } from '../types';

interface SuccessStoriesContextType {
  showSuccessStories: boolean;
  selectedStory: SuccessStory | null;
  toggleSuccessStories: () => void;
  hideSuccessStories: () => void;
  showSuccessStoriesView: () => void;
  selectStory: (storyId: string) => void;
  clearSelectedStory: () => void;
}

const SuccessStoriesContext = createContext<SuccessStoriesContextType | undefined>(undefined);

export function SuccessStoriesProvider({ children }: { children: React.ReactNode }) {
  const [showSuccessStories, setShowSuccessStories] = useState(false);
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);

  const toggleSuccessStories = () => setShowSuccessStories(prev => !prev);
  const hideSuccessStories = () => {
    setShowSuccessStories(false);
    setSelectedStory(null);
  };
  const showSuccessStoriesView = () => setShowSuccessStories(true);
  
  const selectStory = (storyId: string) => {
    const story = successStories.find(s => s.id === storyId);
    if (story) {
      setSelectedStory(story);
    }
  };

  const clearSelectedStory = () => setSelectedStory(null);

  return (
    <SuccessStoriesContext.Provider 
      value={{ 
        showSuccessStories, 
        selectedStory,
        toggleSuccessStories, 
        hideSuccessStories,
        showSuccessStoriesView,
        selectStory,
        clearSelectedStory
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