
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
    let imgProduct = document.getElementById(arr[id].id).getAttribute("src");
    let nameProduct = document.getElementById('nameProduct').innerHTML = arr[id].name;
    let priceProduct = document.getElementById('priceProduct').innerHTML = arr[id].price;
    let c = document.getElementById('imgInfo').setAttribute("src",arr[id].linkImage);
}