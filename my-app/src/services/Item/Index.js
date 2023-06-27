import { Item } from "../../tmp/data";

const getItems = async (catId) => {
  return new Promise((resolve, reject) => {
    resolve(Item.filter((Item) => Item.categoryId === catId));
  });
};

const getItem = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(Item.find((Item) => Item.id === id));
  });
};

const updateItem = async (Item) => {};

const deleteItem = async (id) => {};

const createItem = async (Item) => {};

export { getItem, getItem };