import React from 'react';
import { Container } from '../../ui/Container';
import { useSuccessStories } from '../../../contexts/SuccessStoriesContext';
import SuccessStoriesList from '../SuccessStoriesList';
import SuccessStoryDetail from '../SuccessStoryDetail';

export default function SuccessStoriesLayout() {
  const { selectedStory } = useSuccessStories();

  return (
    <div className="py-24">
      <Container>
        {!selectedStory ? (
          <>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h1 className="text-4xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Success Stories
                </span>
              </h1>
              <p className="text-gray-400 text-lg">
                Discover how we've helped businesses like yours achieve extraordinary growth through strategic digital marketing.
              </p>
            </div>
            <SuccessStoriesList />
          </>
        ) : (
          <SuccessStoryDetail />
        )}
      </Container>
    </div>
  );
}