interface Item {
  nix_item_id: string;
  food_name: string;
  brand_name: string;
  photo: { thumb: string };
  serving_unit: string;
  serving_qty: number;
  nf_calories: number;
  brand_name_item_name: string;
}

export default Item;

interface ItemWithReact extends Item {
    react: boolean;
}

export { ItemWithReact };
