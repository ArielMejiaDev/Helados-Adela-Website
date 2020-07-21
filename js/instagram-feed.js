const images = []
const boxes = document.querySelectorAll('.box-img')
const quantityImages = 5
const backupImages = ['0.jpg', '1.jpg', '2.jpg','0.jpg','1.jpg']
const token = '5362345878.1677ed0.78e8bf4d870c4cac863d7bef7febbd59'
fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}`)
.then(response => response.json())
.then(data => {
    results = data.data
    for (let i = 0; i < quantityImages; i++) {
        images[i] = (results[i].images.standard_resolution.url)
        boxes[i].style.background=`url(${images[i]}) no-repeat center`
        boxes[i].style.backgroundSize='cover'
    }
})
.catch(() => {
    for (let i = 0; i < backupImages.length; i++) {
        images.push(`images/instagram-posts/${backupImages[i]}`)
        boxes[i].style.background=`${images[i]}) no-repeat center`
        boxes[i].style.backgroundSize='cover'
    }
    console.log('Ocurrio un Error!')
})
//how to get token: Just Login as owner of the account and https://instagram.pixelunion.net/