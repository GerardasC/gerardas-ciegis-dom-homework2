class FurnitureCardComponent {
  constructor(props) {
    this.props = props;
    this.init();
  }

  init = () => {
    const { title, type, price, location: { country, city, street }, owner: { fullname, mobile, address, email}, imgSrc, onDelete} = this.props

    this.htmlElement = document.createElement('article');
    this.htmlElement.className = 'card p-3 shadow';
    this.htmlElement.innerHTML = `
      <img src="${imgSrc}" class="card-img-top"/ height="200px" style="object-fit: cover">
      <div class="card-body d-flex flex-column">
      <h2 class="h5">${title}</h2>
      <h3 class="h6">Category: ${type}</h2>
      <ul>
        <li>
          <strong>price</strong>:
          <span>${price} €</span>
        </li>
        <li>
          <strong>location</strong>:
          <span>${street} ${city} ${country}</span>
        </li>
        </ul>
      <h3 class="h5">Owner</h3>
      <ul>
        <li>
          <strong>full name</strong>:
          <span>${fullname}</span>
        </li>
        <li>
          <strong>mobile</strong>:
          <span>${mobile}</span>
        </li>
        <li>
          <strong>address</strong>: 
          <span>${address}</span>
        </li>
        <li>
          <strong>email</strong>:
          <span>${email}</span>
        </li>
      </ul>
      <div class="text-center mt-auto">
        <button class="btn btn-danger">Ištrinti</button>
      </div>
      </div>
    `;
    const delBtn = this.htmlElement.querySelector('.btn');
    delBtn.addEventListener('click', onDelete);
  }

}