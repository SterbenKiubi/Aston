import React from 'react';

interface WithLoadingProps {
  isLoading?: boolean;
}

export function withLoading<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {
  return function WithLoading({ isLoading, ...props }: P & WithLoadingProps) {
    if (isLoading) {
      return (
        <div className="loading">Загрузка постов...</div>
      );
    }
    
    return <WrappedComponent {...props as P} />;
  };
}