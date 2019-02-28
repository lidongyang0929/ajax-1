window.jQuery = function () { }
window.jQuery.ajax = function (options) {
  let url = options.url
  let method = options.method
  let body = options.body
  let successFn = options.successFn
  let failFn = options.failFn
  let headers =  options.headers
  let request = new XMLHttpRequest()
  request.open(method,url)
  for(let key in headers){
      let value = headers[key]
      request.setRequestHeader(key,value)
  }
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
           successFn.call(undefined,request.responseText)
            }
        }else if (request.status >= 400) {
           failFn.call(undefined,request)
        }
    }
  request.send(body)
  
}
window.$ = window.jQuery()
button.addEventListener('click', () => {
   window.jQuery.ajax({
       method:'post',
       url:'/xxx',
       body:'123',
       headers:{
           'content-type':'application/x-www-form-urlencoded',
           'frank':'18'
       },
       successFn:(x)=>{
           f1.call(undefined,x)
           f2.call(undefined,x)
       },
       failFn:(request) => {console.log('2')}
   }
   
   )
})
function f1(){console.log('1')}
function f2(){console.log('2')}