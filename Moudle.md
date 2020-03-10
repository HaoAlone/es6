## export
`
var name = function () {
    return 1
}

export {
    name
};
`

## import
import 输入的变量是只读的，但如果该变量是对象，可以修改它的属性，同时其他模块也可以读到改后的值
from 后模块文件的位置可以是相对路径，也可以是绝对路径，".js"后缀可以省略。
* 模块整体加载 'import * as time from ....'

`

`
### export default
为模块指定默认输出 (唯一)
1. import时不需要 {},
2. import时系统允许你为他取任意名字(其实是个名为default的变量)
`
export default function (){}
import time from ...

`