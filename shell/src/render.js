export default function render(dealerId) {
  return `
    <basket-app class="left-view">
      <!--#include virtual="/basket-app" -->
    </basket-app>

    <div class="right-view">
      <dealers-app>
        <!--#include virtual="/dealers-app" -->
      </dealers-app>
      <products-app dealer="${dealerId}">
        <!--#include virtual="/products-app/dealer/${dealerId}" -->
      </products-app>
    </div>
  `;
}