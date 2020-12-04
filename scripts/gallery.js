function openDialog() {
    var divGallery = document.getElementById('gallery');
    divGallery.setAttribute("open" , "");
}
var clicElementGallery = document.getElementsByClassName('A2');
for(var i=0;i<clicElementGallery.length;i++){
        clicElementGallery[i].addEventListener("click", function(){
            openDialog()
            console.log(this.id)


            var x = this.id - 1;
            var gallery = [
                '<img src="../img/news/reruns/product_ver (1).jpg" alt="">',
                '<img src="../img/news/reruns/product_ver (2).jpg" alt="">',
                '<img src="../img/news/reruns/product_ver (3).jpg" alt="">',
                '<img src="../img/news/reruns/product_ver (4).jpg" alt="">',
                '<img src="../img/news/reruns/product_ver (5).jpg" alt="">',
                '<img src="../img/news/reruns/product_ver (6).jpg" alt="">',
                '<img src="../img/news/reruns/product_ver (7).jpg" alt="">',
                '<img src="../img/news/reruns/product_ver (8).jpg" alt="">',
                '<img src="../img/news/reruns/product_ver (9).jpg" alt="">'
            ];
            document.getElementById('hola').innerHTML =gallery[x];


            function sumar () {
                if (x < 8) {
                    x = x + 1; 
                }else {
                    x = 0;
                }
                document.getElementById('hola').innerHTML = gallery[x];
            }
            document.getElementById('next').addEventListener('click', function () {
                sumar();
            } );

            function restar () {
                if (x <= 8 && x > 0) {
                    x = x - 1;
                } else {
                    x = 8;
                }
                document.getElementById('hola').innerHTML = gallery[x];
            }
            document.getElementById('prev').addEventListener('click', function () {
                restar();
            } );
        }); 
    }

var close = document.getElementById('close');
function closeDialog () {
    let gallery = document.getElementById('gallery');
    gallery.removeAttribute('open');
}
close.addEventListener('click' , function (){
    closeDialog ()
});

