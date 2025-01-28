var posts=["2025/01/27/hello-world/","2025/01/28/好用的手表QQ＆修改版/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };