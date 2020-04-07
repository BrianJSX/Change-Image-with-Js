
function changeImg(id){
    arr = [
        {
            id: 0,
            Name: 'Quần jean 1',
            price: '100000',
            linkImage: '/img/1.jpg'
        },
        {
            id: 1,
            Name: 'Quần jean 2',
            price: '200000',
            linkImage: '/img/2.jpg'
        },
        {
            id: 2,
            Name: 'Quần jean 3',
            price: '300000',
            linkImage: '/img/3.jpg'
        }
    ];
    let imgProduct = document.getElementById(arr[id].id).getAttribute("src");
    let nameProduct = document.getElementById(arr[id].id).getAttribute("src");
    let priceProduct = document.getElementById(arr[id].id).getAttribute("src");
    let c = document.getElementById('imgInfo').setAttribute("src",imgProduct);
}