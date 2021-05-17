

// 能够将传入对象中的所有key代理到 指定对象上
function proxy(vm){
  Object.keys(vm.$data).forEach(key=>{
    Object.defineProperty(vm,key,{
      get(){
        console.log('get',key)
        return vm.$data[key]
      },
      set(v){
        vm.$data[key] = v
      }
    })
  })
}

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
  new Observer(obj)
  // Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
}

// --------------------

class Observer{
  constructor(obj){
    if(Array.isArray(obj)){
      //todo
    }else{
      // 对象响应式
      this.walk(obj)
    }
  }
  walk(obj){
    Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
  }
}

class Compile {
  constructor(el,vm){
    this.$vm = vm
    this.$el = document.querySelector(el)
    if(this.$el){
      this.compile(this.$el)
    }
  }
  // 遍历node，判断节点类型，做不同处理
  compile(node){
    const {childNodes} = node
    Array.from(childNodes).forEach(n=>{
      if(this.isElement(n)){
        console.log('编译元素',n.nodeName);
        // 递归
        if(n.childNodes.length>0){
          this.
        }
      }else{
        console.log('编译文本', n.textContent)
      }
    })
  }
}

class KVue {
  constructor(options){
    // 保存选项
    this.$options = options
    this.$data = options.data
    // 1. 对data进行响应式处理
    observe(options.data)
    // 2. 代理
    proxy(this)
    // 3. 翻译
    new Compile(options.el,this)

  }
}


