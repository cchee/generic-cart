import * as React from "react";
import { IonIcon } from "@ionic/react";
import { Item, LineItem } from "./LineItem";
import { addCircleOutline, undo } from "ionicons/icons";

// Extends Item type with new attributes for Cart
// export type CartItem = Item & {
//   quantity: number;
//   total_price: number;
// };
export type CartItem = Item;

export const makeCartItem = <T extends CartItem>(item: T): T => {
  return {
    ...item
  };
};

export interface CartProps<T extends CartItem> {
  items: T[];
  onReset: () => void;
  onCreate: () => void;
  onIncrement: (item: T) => void;
  onDecrement: (item: T) => void;
  onDelete: (item: T) => void;
}

export class Cart<T extends CartItem> extends React.Component<CartProps<T>> {
  render() {
    const {
      items,
      onReset,
      onCreate,
      onIncrement,
      onDecrement,
      onDelete
    } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm">
          <IonIcon slot="reset" color="medium" icon={undo} />
        </button>
        <button onClick={onCreate} className="btn btn-primary btn-sm">
          <IonIcon slot="create" color="medium" icon={addCircleOutline} />
        </button>
        <div>
          <span className="m-2">SKU #</span>
          <span className="m-2">Description</span>
          <span className="m-2">Unit Price</span>
          <span className="m-2">Quantity</span>
          <span className="m-2">Sub-Total</span>
          <span className="m-2">Action</span>
        </div>
        {items.map(item => (
          <LineItem
            key={item.pos}
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}
