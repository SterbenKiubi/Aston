interface WithLoadingProps {
  isLoading?: boolean;
}

export const withLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P & WithLoadingProps> => {
  const WithLoading: React.FC<P & WithLoadingProps> = ({ isLoading, ...props }) => {
    if (isLoading) {
      return <div className="loading">Загрузка...</div>;
    }
    
    return <WrappedComponent {...props as P} />;
  };

  WithLoading.displayName = `WithLoading(${WrappedComponent.displayName || WrappedComponent.name})`;
  
  return WithLoading;
};