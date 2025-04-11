import React, { useState } from 'react';

const initialTopics = [
  { id: 'fundamentals', name: 'API Fundamentals', completed: false },
  { id: 'rest', name: 'RESTful Design', completed: false },
  { id: 'auth', name: 'Authentication & Security', completed: false },
  { id: 'advanced', name: 'Advanced Patterns', completed: false },
  { id: 'deployment', name: 'Testing & Deployment', completed: false },
];

export default function ProgressTracker() {
  const [topics, setTopics] = useState(initialTopics);

  const handleCheckboxChange = (id) => {
    const updatedTopics = topics.map((topic) =>
      topic.id === id ? { ...topic, completed: !topic.completed } : topic
    );
    setTopics(updatedTopics);
  };

  const calculateProgress = () => {
    const completedTopics = topics.filter((topic) => topic.completed).length;
    return (completedTopics / topics.length) * 100;
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Your API Learning Progress</h1>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${calculateProgress()}%` }}
        ></div>
      </div>
      <ul className="space-y-4">
        {topics.map((topic) => (
          <li key={topic.id} className="flex items-center p-4 border rounded-lg">
            <input
              type="checkbox"
              checked={topic.completed}
              onChange={() => handleCheckboxChange(topic.id)}
              className="w-5 h-5 mr-4"
            />
            <span className={topic.completed ? 'line-through' : ''}>
              {topic.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
