import ContentLoader from "react-content-loader";

import { themeVars } from "../../../../utils/vars/themeVars";

export const MessagesSkeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor={themeVars.colors.lightGreyColor}
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="15" ry="15" width="280" height="85" />

    <circle cx="138" cy="93" r="38" />

    <rect x="64" y="142" rx="5" ry="5" width="150" height="20" />
    <rect x="40" y="170" rx="5" ry="5" width="200" height="12" />
    <rect x="24" y="190" rx="5" ry="5" width="230" height="12" />

    <rect x="0" y="230" rx="0" ry="0" width="100%" height="0.5" />

    <rect x="40" y="250" rx="5" ry="5" width="200" height="12" />
    <rect x="40" y="270" rx="5" ry="5" width="200" height="12" />

    <rect x="0" y="310" rx="0" ry="0" width="100%" height="0.5" />

    <rect x="10" y="355" rx="5" ry="5" width="100" height="35" />
    <rect x="160" y="355" rx="5" ry="5" width="100" height="35" />

    <rect x="0" y="420" rx="0" ry="0" width="100%" height="0.5" />

    <rect x="75" y="450" rx="5" ry="5" width="120" height="20" />
  </ContentLoader>
);
