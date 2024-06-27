import { loadProductsFetch,loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import "../data/backend-practice.js"
/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    })
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
*/

async function loadPage(){
    try{
        
        await loadProductsFetch();

        const value=await new Promise((resolve,reject)=>{
            //throw 'error2';
            loadCart(()=>{
                //reject('error3');

                resolve('value 3');
            });
        });
    } catch(error){
        console.log(error);
    }

   

    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();
/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    }),
]).then((values)=>{
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    })
}).then((value)=>{
    console.log(value);

    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        });
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
    
});
*/


