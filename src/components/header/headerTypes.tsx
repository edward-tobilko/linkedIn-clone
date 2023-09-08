type HeaderContainerProps = {
  isAuth: boolean;
  currentProfilePage: any;
  email: string;
  loading: boolean;
};

type LinksTypes = {
  id: string;
  path: string;
  name: string;
  description: string;
  icon: any;
};

export { HeaderContainerProps, LinksTypes };
