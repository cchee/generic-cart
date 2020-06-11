import * as React from "react";
import { IonIcon } from "@ionic/react";
import { addCircle, removeCircle, trash } from "ionicons/icons";

export type Item = {
  pos: number;
  sku: string;
  description: string;
  unit_price: number;
  quantity: number;
  total_price?: number;
};

export const makeItem = <T extends Item>(item: T): T => {
  return {
    ...item
  };
};

export interface LineItemProps<T extends Item> {
  item: T;
  onIncrement: (item: T) => void;
  onDecrement: (item: T) => void;
  onDelete: (item: T) => void;
}

export class LineItem<T extends Item> extends React.Component<
  LineItemProps<T>
> {
  handleIncrement = () => {
    const { item, onIncrement } = this.props;
    onIncrement(item);
  };

  handleDecrement = () => {
    const { item, onDecrement } = this.props;
    onDecrement(item);
  };

  handleDelete = () => {
    const { item, onDelete } = this.props;
    onDelete(item);
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        <span className="m-2">{item.sku}</span>
        <span className="m-2">{item.description}</span>
        <span className="m-2">USD ${item.unit_price}</span>
        <span className={getBadgeClasses(item.quantity)}>{item.quantity}</span>
        <span className="m-2">
          USD ${item.total_price ? item.total_price : 0}
        </span>
        <button onClick={this.handleIncrement} className="btn btn-sm">
          <IonIcon slot="add" color="medium" icon={addCircle} />
        </button>
        <button onClick={this.handleDecrement} className="btn btn-sm">
          <IonIcon slot="remove" color="medium" icon={removeCircle} />
        </button>
        <button onClick={this.handleDelete} className="btn btn-sm">
          <IonIcon slot="trash" color="medium" icon={trash} />
        </button>
      </div>
    );
  }
}

// Typescript always require type in variable definition/declaration
const getBadgeClasses = (value: number): string => {
  let classes = "badge m-2 ";
  classes += value === 0 ? "badge-warning" : "badge-primary";
  return classes;
};
