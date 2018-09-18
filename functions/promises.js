// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('This is the callback error', undefined)
    }, 2000)
}

getDataCallback((error, data) => {
    if (error) {
        console.log(error)
    }else {
        console.log(data)
    }
})

// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is the promise data')
        reject('This is the promise error')
    }, 2000)
})

myPromise.then((data) => {
    console.log(data)
}, (error) => {
    console.log(error)
})