export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    isFavorite: boolean;
  }
  
 export interface Rating {
    rate: number;
    count: number;
  }

  export interface DropdownProps {
    name: string;
    label: string;
    value: string;
    options: DropDownLOV[]
    onChange: (selectedValue: string) => void;
  }
  
  export interface DropDownLOV {
    value: string;
    option: string;
  }
