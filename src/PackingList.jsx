function Item({ name, isPacked }) {
  return (
    <li className="item">{isPacked ? <del>{name + " ✔"} </del> : name}</li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Dude Ride's Packing List</h1>
      <ul>
        <ul>
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </ul>
    </section>
  );
}
