/* var headMenu = document.getElementById('head'); */


document.getElementById('headMenu').innerHTML = 
    `        <div style="z-index: 2;">
    <div class="sector-logo">
        <a href="index.html">
            <h1 title="Farmacia San Jose">
                <img class="logo" src="img/logo2.png" alt="">
            </h1>
        </a>
    </div>
    <div class="menu">
        <ul class="z-menu">
            <li><a href="novedades.html">Novedades</a></li>
            <li><a href="contact.html">Contactos</a></li>
            <li><a href="#">Nutri-info</a></li>
            <li><a href="#">Quienes somos</a></li>
        </ul>
    </div>
    
    <div class="lateral-bar">
        <dialog id="menu-mobile" >
            <ul class="menu-mobile">
                <li><a href="novedades.html">Novedades</a></li>
                <li><a href="contact.html">Contactos</a></li>
                <li><a href="#">Nutri-info</a></li>
                <li><a href="#">Quienes somos</a></li>
                <li><input type="button" value="X" onclick="document.getElementById('menu-mobile').removeAttribute('open')"></li>
                <li><a href="index.html"><img class="logo" src="img/logo2.png" alt=""></a></li>
            </ul>
        </dialog>
        
        <button value="Muestra diálogo" onclick="document.getElementById('menu-mobile').setAttribute('open', 'open')"> 
            <div class="menu-hamb">
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
        </button>
    </div>
</div>`;