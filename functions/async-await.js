const getDataPromise = (number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof number === 'number' ? resolve(number * 2) : reject('Number must be provided')
    }, 2000);
})

const processData = async () => {
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error)
})