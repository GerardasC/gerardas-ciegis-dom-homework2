class FurnitureGridComponent {
  constructor () {
    this.state = {
      loading: false,
      furnitures: []
    }
    this.init();
  }

  fetchFurnitures = () => setTimeout(() => {  
    return API.fetchFurnitures(this.saveFurnitures, console.error); 
    
 },1000)

  saveFurnitures = (furnitures) => {
    this.state.furnitures = furnitures;
    this.state.loading = false;

    this.render();
  }

  deleteFurniture = (id) => {
    API.deleteFurniture(
      id,
      () => API.fetchFurnitures(this.saveFurnitures, console.error),
      console.error
    );
  }

  init = () => {
    this.state.loading = true;
    this.fetchFurnitures();
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = "row g-3";
    this.render();
  }

  wrapInColumn = (element) => {
    const column = document.createElement('div');
    column.className = 'col-12 col-sm-6 col-lg-4 col-xl-3 d-flex';
    column.appendChild(element);
    return column;
  }

  render = () => {
    const { loading, furnitures } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `<div class="text-center"><img src="assets/loading.gif"/></div>`;
    } else {
      this.htmlElement.innerHTML = '';

      const furnitureElements = furnitures
        .map(({id, ...props}) => new FurnitureCardComponent({
          id,
          ...props,
          onDelete: () => this.deleteFurniture(id)
        }))
        .map(x => x.htmlElement)
        .map(this.wrapInColumn);

      this.htmlElement.append(...furnitureElements);
    }
  }
}