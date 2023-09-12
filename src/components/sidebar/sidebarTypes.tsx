import { ProfileContentProps } from "../../pages/profile/profileTypes";

type SidebarProps = ProfileContentProps & {
  updateUserStatusTC: any;
  downloadSmallPhotoTC: any;
};

type ContactItemProps = {
  contactKey: string;
  contactValue: string;
};

export { SidebarProps, ContactItemProps };
