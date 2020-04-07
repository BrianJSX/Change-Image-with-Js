
function changeImg(id){
    arr = [
        {
            id: 0,
            name: 'Quần Jean Kiểu Pháp',
            price: '100000',
            linkImage: '/img/1.jpg'
        },
        {
            id: 1,
            name: 'Quần Jean Kiểu Nhật',
            price: '200000',
            linkImage: '/img/2.jpg'
        },
        {
            id: 2,
            name: 'Quần Jean Kiểu Ý',
            price: '300000',
            linkImage: '/img/3.jpg'
        }
    ];
    let d =  document.getElementById('infoProduct');
    let c = d.classList;
    let len = c.length;
    if(len > 2){
        c.remove('animated', 'fadeInDown');
    }else{
        this.startImg(id);
        d.classList.add('animated', 'fadeInDown');
    }
    
}
function startImg(id) {
    document.getElementById(arr[id].id).getAttribute("src");
    document.getElementById('nameProduct').innerHTML = arr[id].name;
    document.getElementById('priceProduct').innerHTML = arr[id].price;
    document.getElementById('imgInfo').setAttribute("src",arr[id].linkImage);
}