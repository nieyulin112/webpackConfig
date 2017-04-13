import './static/css/reset.css'
import './static/css/test.less'
import Avalon from 'avalon2'
console.log('avalon', Avalon)
const avalon = new Avalon()
console.log('avalon', avalon)
const global = [1, 2, 3, 4]
class Global {
    constructor () {
        console.log('>>>', this)
    }
    getFunction = () => {
        let arr = global.map((val, index) => {
            return 2 * val
        })
        console.log('arr', arr)
    }
}
console.log('global', new Global().getFunction())
export default Global
