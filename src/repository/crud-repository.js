class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const create = await this.model.create(data);
      return create;
    } catch (error) {
      console.log("something went wrong in the crud repository");
      throw error;
    }
  }

  async destroy(id) {
    try {
      await this.model.destroy({
        where: {
          id: id,
        },
      });
      return create;
    } catch (error) {
      console.log("something went wrong in the crud repository");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const update = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return update;
    } catch (error) {
      console.log("something went wrong in the crud repository");
      throw error;
    }
  }
  async get(id) {
    try {
      const get = await this.model.findByPk(id);
      return get;
    } catch (error) {
      console.log("something went wrong in the crud repository");
      throw error;
    }
  }
  async getAll() {
    try {
      const all = await this.model.findAll();
      return all;
    } catch (error) {
      console.log("something went wrong in the crud repository");
      throw error;
    }
  }
}

module.exports = CrudRepository;
