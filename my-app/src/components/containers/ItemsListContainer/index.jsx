import { Item } from "../../common";

const ItemList = () => { 
   

  return (
    <div>
      Este es mi Item List
      <Task
        title="Item 1"
        category="pc"
        description="Ccomputadora"
        date={new Date().toString()}
        status="completed"
        user="Diego"
      />
      <Task
        title="Item 2"
        category="monitores"
        description="monitor"
        date={new Date().toString()}
        status="pending"
        user="Diego"
      />
      <Task
        title="Item 3"
        category="mouse"
        description="mouse"
        date={new Date().toString()}
        status="cancelled"
        user="Diego"
      />
      <Task
        title="Item 4"
        category="teclados"
        description="teclado"
        date={new Date().toString()}
        status="pending"
        user="Diego"
      />
      <Task
        title="Item 5"
        category="accesorios"
        description="Pad"
        date={new Date().toString()}
        status="pending"
        user="Diego"
      />
    </div>
  );
};

export { ItemList };