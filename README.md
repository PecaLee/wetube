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
    - app.get()
    - middleware
    - morgan - middleware lib (logger)
    - controllers
  - request
  - response
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
