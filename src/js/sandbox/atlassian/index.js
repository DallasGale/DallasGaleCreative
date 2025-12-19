class AnalyticEvent {
    constructor() {
      this.events = []
    }


    // 
   doRequest = (url, options) => {
    return new Promise((resolve, reject) => {

      return resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({
          options
        }),
      });
    });
  };

  // 
  sendAnalyticsEvent = async (events) => {
    let batchEvents = []
    let maxAmount = 20

    if (events.length) {

    }


    try {
      if (!event) {
        throw new Error("no data passed")
      }
      
      const response = await doRequest("wwww", event)
      console.log(response.json())

      if (!response.ok) {
        // new error
        throw new Error("status error")
      }
      
      const result = await response.json();
      console.log({ result })


    } catch (error) {
      console.log(error.message)  
    }
  }
}





// This is the example of component to be instrumented using the function
class Component {
  constructor() { 
    // this is where the function could be called for example
    sendAnalyticsEvent({
      data: {
        type: "constructor",
          data: {
            userId: "abc123"
          }  
        }
      })
    setTimeout(this.init, 100);
  } 

  init() {
    sendAnalyticsEvent({
      data: {
      type: "init",
        data: {
          userId: "abc123"
        }  
      }
    })
   }
}

// const sendAnalyticsEvent = async (event) => {
//   try {
//     if (!event) {
//       throw new Error("no data passed")
//     }
    
//     const response = await doRequest("wwww", event)
//     console.log(response.json())

//     if (!response.ok) {
//       // new error
//       throw new Error("status error")
//     }
     
//     const result = await response.json();
//     console.log({ result })


//   } catch (error) {
//     console.log(error.message)  
//   }
// }


// const doRequest = (url, options) => {
//   return new Promise((resolve, reject) => {
//       return resolve({
//         ok: false,
//         status: 500,
//         json: () => null,
//       });
//   })
// };


const testSend = new Component({

})
console.log({ testSend });