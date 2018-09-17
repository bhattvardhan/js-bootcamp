const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
console.log(counter.get())

const createTipper = (baseTip) => {
    return (billAmount) => {
        return billAmount * baseTip
    }
}

const calculateTip = createTipper(.2)
console.log(calculateTip(100))
console.log(calculateTip(40))