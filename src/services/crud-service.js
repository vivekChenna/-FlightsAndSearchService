class CrudService {


  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const result = await this.repository.create(data);
      return result;
    } catch (error) {
      console.log("something went wrong in the crud-service");
      throw { error };
    }
  }
}

module.exports = CrudService;
