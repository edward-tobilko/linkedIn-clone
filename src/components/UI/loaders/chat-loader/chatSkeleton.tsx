import ContentLoader from "react-content-loader";

import { themeVars } from "../../../../utils/vars/themeVars";

export const ChatSkeleton = () => (
  <ContentLoader
    speed={2}
    width={300}
    height={600}
    viewBox="0 0 300 600"
    backgroundColor={themeVars.colors.lightGreyColor}
    foregroundColor="#ecebeb"
  >
    <circle cx="40" cy="30" r="26" />
    <rect x="80" y="10" rx="5" ry="5" width="100" height="20" />

    <circle cx="40" cy="90" r="26" />
    <rect x="80" y="75" rx="5" ry="5" width="200" height="20" />

    <circle cx="40" cy="155" r="26" />
    <rect x="80" y="140" rx="5" ry="5" width="150" height="20" />

    <circle cx="40" cy="220" r="26" />
    <rect x="80" y="205" rx="5" ry="5" width="200" height="20" />

    <circle cx="40" cy="285" r="26" />
    <rect x="80" y="270" rx="5" ry="5" width="150" height="20" />

    <circle cx="40" cy="345" r="26" />
    <rect x="80" y="330" rx="5" ry="5" width="100" height="20" />

    <circle cx="40" cy="405" r="26" />
    <rect x="80" y="385" rx="5" ry="5" width="200" height="20" />

    <circle cx="40" cy="465" r="26" />
    <rect x="80" y="445" rx="5" ry="5" width="150" height="20" />

    <circle cx="40" cy="525" r="26" />
    <rect x="80" y="505" rx="5" ry="5" width="100" height="20" />
  </ContentLoader>
);
