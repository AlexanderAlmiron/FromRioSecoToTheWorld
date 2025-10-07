<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="img/logoSF.png" type="image/x-icon">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <link rel="stylesheet" href="./css/styles.css">
  <!-- <link rel="stylesheet" href="./actividades/stylesActividades.css"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <title>Home</title>

</head>

<body>
  <div id="root"></div>
  <button id="button">ES / EN</button>
  <h1 class="galeria-titulo">Galería de Fotos</h1>
  <div class="carousel-wrapper" id="GaleriaFotos">
    <div class="carousel-container">
      <?php
        $dir = 'fotosGaleria/';
        $allowed_types = ['jpg', 'jpeg', 'png', 'gif', 'jfif'];
        $files = array_diff(scandir($dir), ['.', '..']);
        foreach ($files as $file) {
          $file_info = pathinfo($file);
          if (isset($file_info['extension']) && in_array(strtolower($file_info['extension']), $allowed_types)) {
            echo '<img src="' . htmlspecialchars($dir . $file) . '" alt="' . htmlspecialchars($file) . '" class="carousel-slide">';
          }
        }
      ?>
    </div>
  </div>
  <footer>
    <div class="footer-content">
        <p>Proyecto realizado por estudiantes de 6° año de la Escuela Proa</p>
        <p>&copy; 2025 Todos los derechos reservados</p>
    </div>
    <div class="footer-links">
        <a href="#">Términos de Servicio</a>
        <a href="#">Política de Privacidad</a>
        <a href="#">Contacto</a>
    </div>
</footer>

  <script type="module" src="./translate/ingles.js"></script>
  <script type="module" src="./translate/español.js"></script>  
  <script type="module" src="./app.js"></script>
</body>

</html>


<!--
  <div id="root"></div>
  <section id="introduccion"></section>
  <section id="cultura"></section>
  <section id="ubicacion"></section>
  <section id="historias"></section>
  <section id="queHacer"></section>
  <section id="dondeComer"></section>
  <section id="dondeDormir"></section>
  <section id="galeria"></section>
  <section id="video"></section>

-->