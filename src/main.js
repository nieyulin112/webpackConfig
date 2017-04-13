import './static/css/reset.css'
import './static/css/test.less'
import Avalon from 'avalon2'
console.log('avalon', Avalon)
const avalon = new Avalon()
console.log('avalon', avalon)
const global = [1, 2, 3, 4]
class Global {
    constructor (x, y) {
        this.x = x
        this.y = y
        console.log('>>>', this)
    }
    getFunction = () => {
        let arr = global.map((val, index) => {
            return 2 * val
        })
        console.log('arr', arr)
    }
}
console.log('global', new Global(2, 3).getFunction())
class App extends Global {
    constructor (x, y, color) {
        super(x, y).getFunction()
        this.color = color
    }
    sayName = () => {
        console.log('name', this.color)
    }
}
let app = new App(1, 2, 'nieyulin')
app.sayName()
app.getFunction()
export default Global
