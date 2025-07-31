// each type must be end with Type 

// don't do 
export interface tourPackagesType {
  id: string;
  image: string;
  title: string;
  price: string;
  features: {
    icon: string;
    label: string;
  }[];
}
// do like this
export interface StatType {
  id: string;
  lable: string;
  count: number;
}
// then use it 
export interface CompoanyInfoType {
  title: string;
  prief: string;
  image: string;
  details: string;
  stats: StatType[];
}

export interface destinationsType {
  id: string;
  image: string;
  title: string;
  price: string;
  schedule: string;
  capacity: string;
  description: string;
}

export interface overAllType {
    icon: string;
    label: string;
}
