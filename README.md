# WeTube Clone coding

- node.js
  - import, export
- babel
- nodemon
- eslint
- prettier
- regex - 정규식
- express
  - app
    - app.use()
      - middleware
      - app.use(express.urlencoded({ extended: true }))
        - POST의 변수를 가져올 수 있게 해 준다.
    - app.get()
    - app.post()
    - middleware
    - morgan - middleware lib (logger)
    - controllers
  - request
    - req.params
    - req.body
  - response
    - res.send
    - res.end
    - res.redirect
    - res.render
  - routers
    - req.params
- pug

  - include
  - extends
  - 변수
  - 자바스크립트 사용
  - Conditionals
    ```pug
    if Condition
      li text
    else if Conditon
      li text2
    else
      li text3
    ```
  - iteration
    ```pug
    each v in vs
      li=v
    else
      li none
    ```
  - Mixins

    - make
      ```pug
      mixin mixinName(data)
        div
          h4=data
      ```
    - use Mixins

      ```pug
      include mixinFileName

      +mixinName(data)
      ```

- HTTP form

  - action
  - method
    - GET
    - POST

- MongoDB
- mongoose
  - scheme
