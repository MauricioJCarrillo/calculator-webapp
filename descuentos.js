function calcularPrecioConDescuento(precioOriginal,descuento,descuentoCupon){
    const porcentajePrecioConDescuento = 100 - descuento - descuentoCupon;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function calcularDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const inputCoupon = document.getElementById("InputCoupon");
    const valuePrice = inputPrice.value;
    const valueDiscount = inputDiscount.value;
    const couponValue = inputCoupon.value;
    let descuentoCupon = 0;
    switch(couponValue) {
        case "JuanDC_es_Batman":
            descuentoCupon = 15;
        break;
        case "pero_no_le_digas_a_nadie":
            descuentoCupon = 30;
        break;
        case "es_un_secreto":
            descuentoCupon = 25;
        break;
      }
    const precioConDescuento = calcularPrecioConDescuento(valuePrice,valueDiscount,descuentoCupon);
    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = precioConDescuento + " $";
}