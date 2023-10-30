
const express = require('express')
//cors: 기본적으로 html 요청을 막는데 그걸 풀어주는 역할
var cors = require('cors')
const app = express() //돌려주는 것 axios: 요청하는 것
const port = 3000 //들어올 수 있는 입구 >> 포트마다 다른 프로그램 실행가능

app.use(cors())
  
app.get('/', (req, res) => { //요청, 응담 정보
  res.send('Hello World!') //응답에 핼로월드 보냄
})
// app.get('/dog', (req, res) => { //요청, 응담 정보
//   res.send('<h1>강아지</h1>') //응답에 핼로월드 보냄
// })
// app.get('/cat', (req, res) => { //요청, 응담 정보
//   res.json({'sound':'멍멍'}) //.send도 가능
// })
app.listen(port, () => { // 몇번 포트에서 듣고 있다 > 서버가 켜져있는것(항상하고있음)
  console.log(`Example app listening on port ${port}`)
})

//1. param 이용
app.get('/user/:id', (req,res) => {
  const p = req.params
  console.log(p)
  res.json({'userId':p.id})
})
app.post('/user/:id', (req,res) => {
  const b = req.body;
  console.log(b);
  res.send({'message':'Hello World'})
})
//2.queryString이용
app.get('/user/query/:id', (req,res) =>{
  const q = req.query;
  console.log(q)
  res.json({'age':q.age})
})

// HTTP메소드: 요청의 목적, 종류를 알리는 수단
// 라우팅: 내부주소
// 콜백함수: 함수 끝나고 실행할 함수

setTimeout(() => { console.log("1초 지남") }, 1000) //1000MS 뒤에 콜백함수 실행

// 동물소리 실습
app.get('/sound/:name', (req, res) => { 
  // const p = req.params
  // p.name 대신에 중괄호 안에 키 값 임력하기!
  const {name} = req.params
  console.log(name);
  if(name=='dog'){
    res.json({'sound':'bowwow'})
  }else if(name=='cat'){
    res.json({'sound':'meow'})
  }else{
    res.send('thers is no <h4>animal</h4> here')
  }
  })

