# gatsby-tutorial
Gatsby를 쓸일이 좀 있어서 공부하고 있습니다.

## [tutorial 페이지](https://www.gatsbyjs.com/docs/tutorial)
- [Gatsby Cli 설치](https://www.gatsbyjs.com/docs/tutorial/part-zero/#using-the-gatsby-cli): [Gatsby CLI란?](https://www.gatsbyjs.com/docs/reference/gatsby-cli/)
```
npm install -g gatsby-cli
```


## src/pages/*.js
- [Gatsby 분석](https://github.com/gatsbyjs/gatsby)
  
- 설치된 Gatsby 패키지 내의 index.js 파일(node_modules/gatsby/dist/query/index.js): 여기서 page 관련 처리를 하고 있다. 

```javascript
const processPageQueries = async (queryIds, {
  state,
  activity,
  graphqlRunner,
  graphqlTracing
}) => {
  state = state || store.getState(); // Make sure we filter out pages that don't exist. An example is
  // /dev-404-page/, whose SitePage node is created via
  // `internal-data-bridge`, but the actual page object is only
  // created during `gatsby develop`.
  console.log("process page queries")
  const pages = _.filter(queryIds.map(id => state.pages.get(id)));

  await processQueries(pages.map(page => createPageQueryJob(state, page)), {
    activity,
    graphqlRunner,
    graphqlTracing
  });
};
```

이렇게 page 폴더 안에 있는 무언가들을 바로 보여준다. 

- 브라우저에서는 어떻게 Page의 데이터를 보여주는가?
    - 일단 common.js 파일이 있다. 
        <img src="../gatsby-tutorial/img/1.png">
    
    - `localhost:8080/about` 페이지를 요청하면 아래와 같은 `about.html`을 반환한다
  
    ```html
    <!DOCTYPE html><html><head><meta charSet="utf-8"/><meta http-equiv="x-ua-compatible" content="ie=edge"/><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/><meta name="note" content="environment=development"/><script src="/socket.io/socket.io.js"></script></head><body><div id="___gatsby"></div><script src="/polyfill.js" nomodule=""></script><script src="/commons.js"></script></body></html>
    ```

