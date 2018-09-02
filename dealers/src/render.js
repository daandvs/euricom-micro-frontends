export default function renderView(dealers) {
  return `
    <div class="dealers-container">
      <h3>Dealers</h3>
      <div class="dealers-scroll-wrapper">
        ${dealers.map((dealer) => `
          <div class="card" style="width: 18rem; display: inline-block;">
            <img class="card-img-top" src="/dealers/dist/assets/images/${dealer.img}" alt="Card image cap" style="height: 200px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${dealer.name}</h5>
              <button class="btn btn-primary js-view-product-btn" data-dealer-id="${dealer.id}">View products</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>`;
  ;
}