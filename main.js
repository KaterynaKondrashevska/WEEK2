const myList = [
    { name: 'John' },
    { name: 'Mary' },
    { name: 'Joe' },
    { name: 'Ben' }
]

const my1Array = _.map(myList, 'name')
const my2Array = _.join(my1Array, `, `)
const arrayToString = _.toString(my2Array)

console.log(arrayToString)
