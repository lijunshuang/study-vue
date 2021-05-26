
test('Hello word',()=>{
  const helloword = require('../index')
  // console.log('hello',helloword)
  expect(helloword).toBe('Hello word1') // 断言 index的导出结果 是否等于 Hello word1
})



