export default function render(dealerId) {
  return `
    <basket-app class="left-view">
      
    </basket-app>

    <div class="right-view">
      <dealers-app>
        
      </dealers-app>
      <products-app dealer="${dealerId}">
        
      </products-app>
    </div>
  `;
}