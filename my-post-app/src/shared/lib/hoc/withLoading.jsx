import React from 'react';

export const withLoading = (WrappedComponent) => {
  return function WithLoading({ isLoading, ...props }) {
    if (isLoading) {
      return (
        <div className="loading">Загрузка постов...</div>
      );
    }
    
    return <WrappedComponent {...props} />;
  };
};