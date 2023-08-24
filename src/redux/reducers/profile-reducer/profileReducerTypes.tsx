type GeoProps = {
  lat: string;
  lng: string;
};

type AddressProps = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
};

type CompanyProps = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type ItemProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
};

type InitialStateProps = {
  postUsers: ItemProps[];
  newPostText: string;
  name: string;
  currentProfilePage: any;
  loading: boolean;
  status: string;
};

export { ItemProps, InitialStateProps };
