let header = document.querySelector("header");
let section = document.querySelector("section");

let requestURL = "https://yhames1978.github.io/Weird-weird.json/js/WeirdShop.json";
let request = new XMLHttpRequest();

//Step Four - open a new request, using the open method
request.open("GET", requestURL);

//Step Five - set up the request to accept JSON

request.responseType = "json";

request.send();


request.onload = function() {
  let weirdShopInc = request.response;
  console.log(weirdShopInc);
  populateHeader(weirdShopInc);
  topProducts(weirdShopInc);
}


function populateHeader(jsonObj) {



  let headerH1 = document.createElement("h1");
  headerH1.textContent = jsonObj['storeName'];
  header.appendChild(headerH1);



  let headerPara = document.createElement("p");
  headerPara.textContent = 'Location: ' + jsonObj['location'] + ' , Established:  ' + jsonObj['established'];
  header.appendChild(headerPara);
}



function topProducts(jsonObj) {


  var topProducts = jsonObj['topProducts'];

  for (let i = 0; i < topProducts.length; i++) {

    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');



    img.setAttribute('src', 'https://yhames1978.github.io/WeirdShopImages/images/' + topProducts[i].image);
    img.setAttribute('alt', topProducts[i].image );

    h2.textContent = topProducts[i].name;
    p1.textContent = 'Price: ' + topProducts[i].price;
    p2.textContent = 'Type: ' + topProducts[i].type;
    p3.textContent = 'Description: ' + topProducts[i].description;






    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    section.appendChild(article);

  }

}
