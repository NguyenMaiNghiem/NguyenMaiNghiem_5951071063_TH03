const access_token = 'EAAAAZAw4FxQIBAPz15PMs1LMsk4KAF6HYB5Y7kNxVUHkPWacQzFb9vN5dMDxY5b1NmvynJNIha8S1fuGXtvoCW1J0X13m9BBj70vcPr8dDIcUcSEjrgeK5boRw8hG0xbKfwemKd1kvYsf7vEnKI7IZCVe2Jw7SC4fOZADlofy8R9P2qOdvCTUdKmjnX3g8ZD';
var likes = 0;
var arrayIdPost = [];
var content = "";
function init () {
     fetch('https://graph.facebook.com/107872818104221/posts?access_token=' + access_token).then(
      function(response) {
      if (response.status !== 200) {
        console.log('Lỗi, mã lỗi ' + response.status);
        return;
      }
      // parse response data
      response.json().then(data => {
            for(let i = 0; i <3; i++){
              document.getElementById("title" + i).innerHTML = data.data[i].message;
              arrayIdPost.push(data.data[i].id);
              fetch('https://graph.facebook.com/'+ data.data[i].id +'?fields=likes.summary(true)&access_token=' + access_token).then(
            function(response) {
            if (response.status !== 200) {
            console.log('Lỗi, mã lỗi ' + response.status);
             return;
            }
      // parse response data
            response.json().then(data => {
              document.getElementById("title" + i).innerHTML = "Bài viết " + (i) + "<br>" + data.likes.summary.total_count + " likes";
          })
          }
          )
          .catch(err => {
              console.log('Error :-S', err)
          });
            }
            
      })
    }
  )
  .catch(err => {
    console.log('Error :-S', err)
  });
}
init ();


function myFunction1(){
  var content = document.getElementById("exampleFormControlTextarea0").value;
  
  const data = { access_token: access_token, message : content };
  fetch('https://graph.facebook.com/'+arrayIdPost[0]+'/comments', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  alert('Đăng bình luận thành công');
  document.getElementById('exampleFormControlTextarea0').value = "";
})
.catch((error) => {
  console.error('Error:', error);
});
}


function myFunction2(){
  var content = document.getElementById("exampleFormControlTextarea1").value;
  const data = { access_token: access_token, message : content };
  fetch('https://graph.facebook.com/'+arrayIdPost[1]+'/comments', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  alert('Đăng bình luận thành công');
    document.getElementById('exampleFormControlTextarea1').value = "";
})
.catch((error) => {
  console.error('Error:', error);
});
}

function myFunction3(){
  var content = document.getElementById("exampleFormControlTextarea2").value;
  const data = { access_token: access_token, message : content };
  fetch('https://graph.facebook.com/'+arrayIdPost[2]+'/comments', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
  alert('Đăng bình luận thành công');
    document.getElementById('exampleFormControlTextarea2').value = "";
})
.catch((error) => {
  console.error('Error:', error);
});
}
