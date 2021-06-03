import  Vue from 'vue'
export default function create(Component, props){
  // 1、创建Component组件的实例
  const Ctor = Vue.extend(Component)
  const comp = new Ctor({
    propsData: props
  })
  // 2、挂载，将其挂载到body上
  comp.$mount()

  document.body.appendChild(comp.$el)

  comp.remove = function(){
    document.body.removeChild(comp.$el)
    comp.$destroy()
  }
  return comp

}

