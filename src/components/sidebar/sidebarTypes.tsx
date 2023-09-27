import { ProfileContentProps } from "../../pages/profile/profileTypes";

import { TypedDispatch } from "../../redux/store";

type SidebarProps = ProfileContentProps & {
  downloadSmallPhotoTC: any;
};

type ContactItemProps = {
  contactKey: string;
  contactValue: string;
};

export { SidebarProps, ContactItemProps };
