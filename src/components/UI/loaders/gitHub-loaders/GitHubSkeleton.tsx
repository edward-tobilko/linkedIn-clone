import ContentLoader from "react-content-loader";

export const GitHubSkeleton = () => (
  <ContentLoader
    speed={1.5}
    width={400}
    height={250}
    viewBox="0 0 400 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebebc2f8"
  >
    <rect x="0" y="15" rx="5" ry="5" width="120" height="10" />
    <rect x="0" y="45" rx="5" ry="5" width="220" height="10" />
    <rect x="0" y="75" rx="5" ry="5" width="170" height="10" />
    <rect x="0" y="105" rx="5" ry="5" width="150" height="10" />
    <rect x="0" y="135" rx="5" ry="5" width="220" height="10" />
    <rect x="0" y="165" rx="5" ry="5" width="120" height="10" />
    <rect x="0" y="195" rx="5" ry="5" width="170" height="10" />
  </ContentLoader>
);
