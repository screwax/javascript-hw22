class Storage {
    constructor(initialItems) {
      this.items = [...initialItems];
    }

    getItems() {
      return this.items;
    }

    addItem(item) {
      this.items.push(item);
    }

    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); 

storage.addItem('Дроїд');
console.table(storage.getItems()); 

storage.removeItem('Пролонгер');
console.table(storage.getItems());