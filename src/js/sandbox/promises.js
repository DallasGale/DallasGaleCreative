// setTimeout(() => {
//   console.log("timeout")
// }, 0)

const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Success!")
  }, 250)
})


myPromise.then((e) => console.log("Yay", e))


// console.log("immediate")