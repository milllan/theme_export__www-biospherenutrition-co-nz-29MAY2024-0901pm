function load_cart(){
  fetch(window.Shopify.routes.root +'?section_id=cart-drawer')
  .then((response) => response.text())
  .then((responseText) => {
    const cartid = 'cart-drawer';
    const html = new DOMParser().parseFromString(responseText, 'text/html')  
    const destination = document.querySelector('.cart-sidebar');
    const source = html.getElementById(cartid);
    if (source && destination) destination.innerHTML = source.innerHTML;
    document.querySelectorAll('.item-remove').forEach(function(cartRemove){
      var data_line = cartRemove.dataset.line;      
      cartRemove.addEventListener('click',(evt) => removeItem(data_line));
    });
    
//     document.querySelectorAll('.quantity__input').forEach(function(cartQtyUpdate){
//       var data_id = cartQtyUpdate.dataset.variant;   
//       var data_qty = cartQtyUpdate.value;
//       console.log('data_qty--',data_qty);
//       cartQtyUpdate.addEventListener('change',(evt) => updateQuantity(data_id, data_qty));
//     });
    
    
    /*document.querySelectorAll('.custom-add-to-cart').forEach(function(variantsId){
      var data_variantsId = variantsId.dataset.id;          
      variantsId.addEventListener('click',(evt) => custom_addtocart(data_variantsId));
    });*/
    
    document.querySelectorAll('.header__icon--cart').forEach(function(cartButton){
      cartButton.addEventListener('click',function(e){
        document.querySelector('body').classList.add('open-drawer');
        document.querySelector('body').classList.remove('open-menu','open-search','open-sort','open-filter');        
      });
    });
    window.addEventListener('resize', function(event){
      var docWidth = document.documentElement.clientWidth;      

      if(docWidth < 990) {
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 2,
          spaceBetween: 0,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }
    });
    document.querySelectorAll('.overlay-box,.cart-drawer-close').forEach(function(cartButton){
      cartButton.addEventListener('click',function(e){
        document.querySelector('body').classList.remove('open-drawer','open-menu','open-search','open-sort','open-filter');
      });
    });

    myCartSection()
    const url = '/cart.js';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      var cart_count = data.item_count;
      var cart_total = data.total_price;
      $.each(data.items , function(index,data){
        if(data.product_id == '6921931292837' && data.quantity >= 1){
          $('.wrapper-cart__item').each(function(){
             if($(this).find('.cart-items__title h4').text() == data.product_title){
               $(this).find('.QuantityBox').css({'pointer-events': 'none','opacity': '0.5'});
               $('.trial_addtocart').attr('disabled','disabled');
               $('.trial_addtocart').attr('aria-disabled',true);
             } 
          });
        }
      });
      var product_include = false;
      $('.wrapper-cart__item').each(function(){
        if($(this).find('.cart-items__title h4').attr('data-id') == '6921931292837'){
          product_include = true;
          $(this).find('.QuantityBox').css({'pointer-events': 'none','opacity': '0.5'});
        }
      });
      console.log(product_include,'product_include');
      if(product_include){
        $('.trial_addtocart').attr('disabled','disabled');
        $('.trial_addtocart').attr('aria-disabled',true);
      }else{
        $('.trial_addtocart').removeAttr('disabled aria-disabled');
      }
      if(data.items.length == '0'){
        $('.trial_addtocart').removeAttr('disabled aria-disabled');
      }
    })
    .catch(function(error) {
      console.log(error);
    })
  });
}
load_cart();
function removeItem(data_line){
  const data = {'line': data_line ,'quantity': 0 };
  fetch('/cart/change.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    load_cart();
      const url = '/cart.js';
      fetch(url).then((resp) => resp.json())
      .then(function(data) { $(".site-header__cart-count span[data-cart-count]").text(data.item_count); })
      .catch(function(error) { console.log(error); })
    console.log('add',data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

function updateQuantity(data_index, data_qty) {
	
  var upId = data_index;
  var upQTY = data_qty;
  updateCartItem(upId, upQTY)	
  
  async function updateCartItem(id, qty) {
    const result = await fetch("/cart/change.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        id: id,
        quantity: qty
      })
    })
    .then((data) => {
      if(data.status === 200){
        load_cart();
        
        const url = '/cart.js';
        fetch(url).then((resp) => resp.json())
        .then(function(data) { $(".site-header__cart-count span[data-cart-count]").text(data.item_count); })
        .catch(function(error) { console.log(error); })
      
      }else{
        console.log('Cart drawer quantity is not updated.');
      }
    });
  }
}

function custom_addtocart(variantsId) {
  
  //console.log("Clicked");
	//console.log(variantsId);
  var pbTempId = Number(variantsId);
  var pbTempQTY = 1;
  addItem(pbTempId, pbTempQTY)

  async function addItem(variantId, quantity) {
    const result = await fetch("/cart/add.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        id: variantId,
        quantity: quantity
      })
    })
    .then((data) => {
      if(data.status === 200){  
        
        load_cart();
        document.querySelector('body').classList.add('open-drawer');
        document.querySelector('body').classList.remove('open-menu','open-search','open-sort','open-filter');
        console.log("Done");
      }else{
        console.log('cart-drawer error');
      }
    });
  }

}

jQuery(document).on("click", ".quantity__button", function (e) {
  e.preventDefault();
  var check_qty_btn = $(this).attr("name");
  var main_qty = Number($(this).parents("quantity-input").find(".quantity__input").val());
  var main_variant = $(this).parents("quantity-input").find(".quantity__input").attr("data-variant");
  var main_id = $(this).parents("quantity-input").find(".quantity__input").attr("data-id");
  var main_title_id = $(this).parents(".wrap-qty-price").prev('.cart-items__title').find("h4").attr("data-id");
  var upd_qty = "";
  
    if(check_qty_btn == "plus"){
      var upd_qty = (main_qty + 1);
    }else if(check_qty_btn == "minus"){
      var upd_qty = (main_qty - 1);
    }
    $(this).parents("quantity-input").find(".quantity__input").val(upd_qty);
    updateQuantity(main_variant, upd_qty);
});

function myCartSection() {
  var SideContentHeight = $('.cartDrawer-header-top').innerHeight() + $('.wrapper-cartdrawer__header').innerHeight() + $('.cartDrawer-header-bottom').innerHeight() + $('.wrapper-offer_message').innerHeight() + $('.wrapper-cart-drawer__footer').innerHeight();
  $('.wrapper_cart_middle').css('height', $(window).height() - SideContentHeight + 'px');
}
jQuery(window).resize(function(){
  myCartSection();
});
if($("body").hasClass("Appstle")){
  console.log("----- Appstle custom js run -----")
  window.fetch = new Proxy(window.fetch, {
      apply(fetch, that, args) {
        var result = fetch.apply(that, args);
        return result.then((response) => {
          if (args[0].search && args[0].search(/cart.*js|cart\/add/) >= 0 && args[1] && ("POST" == args[1].method || "PUT" == args[1].method)) {
            load_cart();
            const url = '/cart.js';
            fetch(url).then((resp) => resp.json())
            .then(function(data) { $(".site-header__cart-count span[data-cart-count]").text(data.item_count); })
            .catch(function(error) { console.log(error); })
            document.querySelector('body').classList.add('open-drawer');
            document.querySelector('body').classList.remove('open-menu','open-search','open-sort','open-filter');
          }
        }), result
      }
    });
}

