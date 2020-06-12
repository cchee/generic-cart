import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import { NavBar } from "./NavBar";
import { Cart, CartItem, makeCartItem } from "./Cart";

export interface HomeProps {}

class Home extends React.Component<HomeProps> {
  state = {
    items: [
      makeCartItem({
        pos: 0,
        sku: "000001",
        description: "Item 1",
        quantity: 0,
        unit_price: 1.0,
        total_price: 0.0,
      }),
      makeCartItem({
        pos: 1,
        sku: "000002",
        description: "Item 2",
        quantity: 0,
        unit_price: 2.0,
        total_price: 0.0,
      }),
      makeCartItem({
        pos: 2,
        sku: "000003",
        description: "Item 3",
        quantity: 0,
        unit_price: 3.0,
        total_price: 0.0,
      }),
      makeCartItem({
        pos: 3,
        sku: "000004",
        description: "Item 4",
        quantity: 0,
        unit_price: 4.0,
        total_price: 0.0,
      }),
    ],
  };

  handleCreate = () => {
    const items = [...this.state.items];
    items.push(
      makeCartItem({
        pos: items.length,
        sku: "00000" + (items.length + 1),
        description: "Item " + (items.length + 1),
        quantity: 0,
        unit_price: items.length + 1.0,
        total_price: 0.0,
      })
    );
    this.setState({ items });
  };

  handleReset = () => {
    const items = [...this.state.items];
    // eslint-disable-next-line
    items.forEach((item) => {
      item.quantity = 0;
      item.total_price = 0;
    });
    this.setState({ items });
  };

  handleIncrement = (item: CartItem) => {
    const items = [...this.state.items];
    const i = items[item.pos];
    i.quantity++;
    i.total_price = i.unit_price * i.quantity;
    this.setState({ items });
  };

  handleDecrement = (item: CartItem) => {
    const items = [...this.state.items];
    const i = items[item.pos];
    if (i.quantity > 0) {
      i.quantity--;
      i.total_price = i.unit_price * i.quantity;
      this.setState({ items });
    }
  };

  handleDelete = (item: CartItem) => {
    const items = this.state.items.filter((c) => c.pos !== item.pos);
    let nid = 0;
    items.forEach((i) => (i.pos = nid++));
    this.setState({ items });
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <NavBar
            totalCounters={
              this.state.items.filter((c) => c.quantity > 0).length
            }
            totalPrice={this.state.items
              .filter((c) => c.total_price > 0)
              .reduce((a, b) => a + (b.total_price || 0), 0)}
          />
        </IonHeader>
        <IonContent className="ion-padding">
          <Cart
            items={this.state.items}
            onReset={this.handleReset}
            onCreate={this.handleCreate}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
