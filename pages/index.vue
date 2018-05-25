<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">Crescendo</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fa fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#download">Descargas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#features">Funcionalidades</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead">
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-lg-7 my-auto">
              <div class="header-content mx-auto">
                <h1 class="mb-5">Unete a una banda, busca audiciones, posiciónate como un músico calificado!</h1>
                <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Empieza ahora!</a>
              </div>
            </div>
            <div class="col-lg-5 my-auto">
              <div class="device-container">
                <div class="device-mockup iphone6_plus portrait white">
                  <div class="device">
                    <div class="screen">
                      <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                      <img :src="require('~/assets/img/demo-screen-1.png')" class="img-fluid" alt="">
                    </div>
                    <div class="button">
                      <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="download bg-primary text-center" id="download">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto">
              <h2 class="section-heading">Descubre de que se trata todo esto!</h2>
              <p>Mediante la mejor experiencia in-app. Descarga la app ahora gratis!</p>
              <div class="badges">
                <a class="badge-link" href="#"><img :src="require('~/assets/img/google-play-badge.svg')" alt=""></a>
                <a class="badge-link" href="#"><img :src="require('~/assets/img/app-store-badge.svg')" alt=""></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features" id="features">
        <div class="container">
          <div class="section-heading text-center">
            <h2>Todo lo que necesitas</h2>
            <p class="text-muted">¡Se parte de esta comunidad, CONÉCTATE con músicos, encuentra nuevas OPORTUNIDADES como artista, crea el perfil de tu banda y mucho más en un solo lugar!</p>
            <hr>
          </div>
          <div class="row">
            <div class="col-lg-4 my-auto">
              <div class="device-container">
                <div class="device-mockup galaxy_s5 portrait">
                  <div class="device">
                    <div class="screen">
                      <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                      <img :src="require('~/assets/img/demo-screen-1.png')" class="img-fluid" alt="">
                    </div>
                    <div class="button">
                      <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 my-auto">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="feature-item">
                      <i class="icon-screen-smartphone text-primary"></i>
                      <h3>Multi-Plataforma</h3>
                      <p class="text-muted">Tenemos aplicaciones tanto en iOS y en Android!</p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="feature-item">
                      <i class="icon-camera text-primary"></i>
                      <h3>Artworks</h3>
                      <p class="text-muted">Sube y Descubre miles de artworks subidos por miles de artistas!</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="feature-item">
                      <i class="icon-present text-primary"></i>
                      <h3>Gratis de usar</h3>
                      <p class="text-muted">Como siempre, podrás usar Crescendo sin pagar absolutamente nada!</p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="feature-item">
                      <i class="icon-lock-open text-primary"></i>
                      <h3>Seguridad</h3>
                      <p class="text-muted">Gracias a nuestra autentifiación, podrás acceder de manera segura!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta">
        <div class="cta-content">
          <div class="container">
            <h2>Explota <br>Tu Estilo de Vida</h2>
            <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Empecemos!</a>
          </div>
        </div>
        <div class="overlay"></div>
      </section>

      <footer>
        <div class="container">
          <p>&copy;Crescendo 2018. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'index-page',
  mounted () {
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 48)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }
}
</script>

<style lang="scss">
@import 'assets/scss/device-mockups.css';
@import 'assets/scss/new-age.css';
</style>
