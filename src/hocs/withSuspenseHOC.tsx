import { ComponentType, Suspense } from "react";

import { ProfileContentSkeleton } from "../components/UI/loaders/profile-loaders/ProfileContentSkeleton";

export function withSuspenseHOC<SWCP extends JSX.IntrinsicAttributes>(
  SuspenseWrappedComponent: ComponentType<SWCP>,
) {
  return (props: SWCP) => {
    return (
      <Suspense fallback={<ProfileContentSkeleton />}>
        <SuspenseWrappedComponent {...props} />
      </Suspense>
    );
  };
}

//? SWCP - Suspense Wrapped Component Props
