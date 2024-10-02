export const español = `
      <div id="img_bc">
    <header>
        <div class="log">
            <a href="#img_bc">
                <img src="img/logoSF.png" alt="logo" width="50px">
            </a>
        </div>
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <ul class="links">
                <li><a class="items" href="#introduccion">Introducción</a></li>
                <li><a class="items" href="#cultura">Cultura</a></li>
                <li><a class="items" href="#ubicacion">Ubicación</a></li>
                <li><a class="items" href="#historias">Historias</a></li>
                <li><a class="items" href="#">Guía PDF</a></li>
                <li><a class="items" href="#">Videos</a></li>
            </ul>
        </nav>
    </header>

    <div class="title">
        <h3>De Río Seco <br> al Mundo</h3>
    </div>




    <div id="header">
        <p>
            "En Villa de María del Río Seco<br>Al pié del Cerro del Romero Nací<br>Y esto es todo cuanto diré de mí
            <br>Porque no soy más que el eco <br>Del canto natal que traigo aquí" <br> Leopoldo Lugones.
        </p>
    </div>

</div>

<section id="introduccion">
    <h1>Villa de María del Río Seco</h1>

    <div class="vdmp">
        <div>
            <div>
                <!--<span id="imgEntrada"></span> -->
                <img src="./carrusel/entrada.jpg" alt="" width="400px">
            </div>
        </div>
        <p>
            Villa de María del Río Seco es un pueblo ubicado al norte de la provincia de Córdoba, caracterizado más
            que nada por su cultura y conocido como la cuna de los poetas. El pueblo es famoso también por ser el
            lugar de nacimiento de Leopoldo Lugones, cuya casa natal se ha convertido en un museo y fue declarada
            monumento histórico nacional.

        </p>
    </div>
</section>

<section id="cultura">
    <h1>Cultura</h1>
    <div class="cul">
        <h2>Bajada de la Virgen: </h2>
        <img src="./img/bajadavirgen.jpg" alt="img" width="400px">
        <p> Es una celebración religiosa y cultural que se realiza en honor a la Virgen María,
            patrona del lugar. Este evento, de gran significado para la comunidad, consiste en el descenso de la
            imagen
            de la Virgen desde su ermita o lugar sagrado hasta la iglesia o un sitio central del pueblo, donde se
            llevan
            a cabo diversas actividades religiosas, como misas, procesiones y rezos.</p>
        <h2>Patronales: </h2>
        <img src="./img/patronales.jpg" alt="img" width="400px">
        <p>Son celebraciones religiosas y culturales que se llevan a cabo en honor al santo o la virgen
            que es considerado el patrono o la patrona de una localidad. Estas festividades suelen estar
            profundamente arraigadas en las tradiciones y costumbres de la comunidad, y su fecha generalmente
            coincide con el día en el que la Iglesia Católica conmemora al santo o virgen correspondiente. </p>
        <h2>Desfile del 25 de Mayo: </h2>
        <img src="./img/25deMayo.jpeg" alt="img" width="400px">
        <p>Es una celebración local que conmemora la Revolución de Mayo de 1810, un
            acontecimiento clave en la historia de Argentina que marcó el inicio del proceso de independencia del
            país. Este evento se celebra anualmente con gran entusiasmo por la comunidad de Villa de María del Río
            Seco. <br> Durante el desfile, participan diversas instituciones locales, como escuelas, grupos
            comunitarios, y fuerzas de seguridad, que marchan por las calles del pueblo en honor a los próceres y a
            los ideales de libertad y autonomía que inspiraron la Revolución. Los participantes suelen vestir trajes
            típicos, uniformes históricos, o atuendos tradicionales que reflejan la cultura y la historia de la
            región.
        </p>
        <h2>Festival del Canto y la Poesía: </h2>
        <img src="./img/festival.jpg" alt="img" width="400px">
        <p>Es un evento cultural que celebra la rica tradición artística de la región, especialmente enfocándose en
            la música folklórica y la poesía. Este festival, que se realiza anualmente, es uno de los
            acontecimientos más importantes de la localidad, atrayendo tanto a artistas locales como a visitantes de
            otras partes del país.Durante el festival, se llevan a cabo una serie de presentaciones en las que
            participan cantantes, poetas, músicos, y grupos folklóricos, quienes comparten su arte en un ambiente de
            celebración y homenaje a la cultura regional.</p>
    </div>
</section>

<section id="ubicacion">
    <h1>Ubicación</h1>
    <div class="ubi">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13834.394308674417!2d-63.73295472915163!3d-29.904665249106685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9431a257c91bff41%3A0x1fe63a775e22c32c!2zVmlsbGEgZGUgTWFyw61hLCBDw7NyZG9iYQ!5e0!3m2!1ses-419!2sar!4v1725555133096!5m2!1ses-419!2sar"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</section>

<section class="historias">
  <h1>Historias</h1>
  <div class="card" style="width: 18rem;">
    <a href="./hisoryPages/leopoldo/leopoldo.html" >
    <img src="./img/Leopoldo_Lugones.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Lugones</h5>
    </div>
  </a>
  </div> 
  
  <div class="card" style="width: 18rem;">
    <a href="./hisoryPages/pancho/pancho.html">
    <img src="./img/pancho.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Francisco "Pancho" Ramírez</h5>
    </div>
  </a>
  </div> 
  <div class="card" style="width: 18rem;">
    <a href="./hisoryPages/cautivita/cautivita.html">
    <img src="./img/cautiva.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Virgen Cautivita</h5>
    </div>
  </a>
  </div> 
  <div class="card" style="width: 18rem;">
    <a href="./hisoryPages/fundacion/fundacion.html">
    <img src="./img/fundacion2.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Fundacion del Pueblo</h5>
    </div>
  </a>
  </div> 
  <div class="card" style="width: 18rem;">
    <a href="./hisoryPages/primeroHab/primeroshab.html">
    <img src="./img/fundacion.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Primeros Habitantes</h5>
    </div>
  </a>
  </div> 
</section>
`;