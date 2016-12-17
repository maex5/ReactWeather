// // function getTempPromise (location) {
// //   return new Promise(function (resolve, reject){
// //     setTimeout(function () {
// //       resolve(29);
// //       reject('City not found');
// //     }, 3000);
// //   });
// // }
// //
// // getTempPromise('Helsinki').then(function (temp){
// //   console.log('Promise success', temp);
// // }, function (err) {
// //   console.log('Promise error', err);
// // })
//
// function addPromise (a, b) {
//   return new Promise (function (resolve, reject) {
//     if (typeof a === 'number' && typeof b === 'number'){
//       resolve(a + b);
//     } else {
//       reject('not 2 numbers');
//     }
//   });
// }
//
// addPromise(1, 2).then(function (plus){
//   console.log('Success: ', plus);
// }, function (err) {
//   console.log('Fail: ', err);
// })
//
// addPromise('asd', 2).then(function (plus){
//   console.log('Success: ', plus);
// }, function (err) {
//   console.log('Fail: ', err);
// })
