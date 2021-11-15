const baseURL = 'http://localhost:3000';

class API {
  static fetchFurnitures = (success, failure) => {
    fetch(`${baseURL}/furnitures`)
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }

  static deleteFurniture = (id, success, failure) => {
    fetch(`${baseURL}/furnitures/${id}`, { method: 'DELETE' })
      .then(res => res.ok ? success() : failure(res.statusText))
      .catch(failure)
  }
}

// API.fetchFurnitures(
//   console.log,
//   console.error
// )

// API.deleteFurniture(
//   "1",
//   () => console.log('Ištrinta'),
//   console.error
// ) 