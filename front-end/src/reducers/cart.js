// import * as constants from '../pages/categories/constants';

// var initState = [];

// var cartReducer = (state = initState, action)=>{
//     switch (action.type){

//         case constants.UPDATE_CART:
//             var {subject} = action;
//             updateCart(state, subject);
//             return [...state];

//         default:
//             return [];
//     }
// }

// const updateCart = function(cart, sub){
//     var check = false;
//     cart.forEach((item, index)=>{
//         if(item.code === sub.code){
//             check=true;
//             if(item.id === sub.id){
//                 cart.splice(index, 1);
//             }
//             else{
//                 cart = [...cart, cart[index].id = sub.id];
//             }
//         }
//     })
//     if(check === false){
//         cart.push(sub);
//     }
// }

// export default cartReducer;