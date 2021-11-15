class FurnitureGridComponent {
  constructor () {
    this.state = {
      loading: false,
      furnitures: []
    }
    this.init();
  }

  fetchFurnitures = () => API.fetchFurnitures(this.saveFurnitures, console.error)

  saveFurnitures = (furnitures) => {
    this.state.furnitures = furnitures;
    this.state.loading = false;

    this.render();
  }

  init = () => {
    this.state.loading = true;
    this.fetchFurnitures();
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { loading, furnitures } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = 'siunčiama...';
    } else {
      this.htmlElement.innerHTML = 'parsiųsta';
    }
  }
}