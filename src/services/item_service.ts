import ItemRepositoryImpl from "../domain/repositories/item_repository_impl";

class ItemService {
  async findAll() {
    return ItemRepositoryImpl.findAll();
  }

  async find(id: number) {
    return ItemRepositoryImpl.find(id);
  }
}

export default new ItemService();