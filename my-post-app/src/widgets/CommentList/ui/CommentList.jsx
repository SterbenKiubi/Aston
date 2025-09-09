import React, { useState, useCallback } from 'react';

export const CommentList = ({ postId, comments = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleComments = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  if (!comments || comments.length === 0) {
    return null;
  }

  return (
    <div>
      <button 
        onClick={toggleComments} 
      >
        <span>
          {isExpanded ? '▼' : '►'}
        </span>
        {isExpanded ? 'Свернуть' : 'Развернуть'} комментарии 
        <span>({comments.length})</span>
      </button>
      
      {isExpanded && (
        <div>
          {comments.map(comment => (
            <div key={comment.id}>
              <h4>{comment.name}</h4>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};