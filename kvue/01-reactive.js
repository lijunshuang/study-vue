// Object.defineProperty()

// 给一个 obj 定义一个 响应式的属性
function defineReactive(obj,key,val){
  // 递归, val是对象 就需要递归处理
  observe(val)
  Object.defineProperty( obj, key, {
    get(){
      console.log('get', key)
      return val
    },
    set (newVal){
      if(newVal !== val){
        console.log('set',key)
        val = newVal
        // 新的值 如果是对象，仍然需要递归遍历处理
        observe(newVal)
      }
    }
  })
}

// 遍历 响应式处理
function observe(obj){
  // 判断 如果obj 不是对象 且为空则 return
  if(typeof obj !== 'object' || obj == null){
    return obj
  }
  Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
}

function set (obj,key,val){
  defineReactive(obj,key,val)
}
const obj = {
  foo:'foo',
  bar:'bar',
  baz:{
    n:1
  }
};
// defineReactive(obj, 'foo', 'foo')
observe(obj)

set(obj,'dong','dongval')

obj.dong





