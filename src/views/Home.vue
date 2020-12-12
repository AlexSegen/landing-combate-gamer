<template>
  <div class="home">
    <div class="cg__bg"></div>

    <Hero/>

  <section class="cg__section cg__section __home">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="cg__section-content">
              <h2 class="cg__section-title __align"><small>Bienvenido a <strong class="text-primary">Combate Gamer</strong></small> <br>
              ¿De qué trata?</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at numquam. Facere repudiandae at dolor atque quisquam, consectetur laborum animi quae assumenda vel illo obcaecati debitis quia nostrum, rerum hic.</p>

              <div class="cg__plus">
                <img src="http://placehold.it/80x80" alt="">
                <img src="http://placehold.it/80x80" alt="">
                <img src="http://placehold.it/80x80" alt="">
                <img src="http://placehold.it/80x80" alt="">
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit illum omnis! Officiis est itaque nisi.</p>

              <p class="text-right"><a class="btn cg-btn is-secondary has-shadow" href="#">Saber más</a></p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="cg__section-content">
              <img class="cg__splash" src="@/assets/img/home/logo-splash.png" alt="Combate Gamer">
            </div>
          </div>
        </div>
      </div>
  </section>


  <section class="cg__section cg__section __home">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="cg__section-content text-center">
              <h2 class="cg__section-title"><small class="text-primary">Todas las plataformas</small> <br>
              Últimas Partidas</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at numquam. Facere repudiandae at dolor atque quisquam, consectetur laborum animi quae assumenda vel illo obcaecati debitis quia nostrum, rerum hic.</p>

              <LastMatches/>

            </div>
          </div>
        </div>
      </div>
  </section>

    
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import LastMatches from '@/components/home/LastMatches.vue'

export default {
  name: 'Home',
  components: {
    Hero, LastMatches
  }
}
</script>
<style lang="scss" scoped>
.cg {
  &__plus {
    margin: 20px 0;
    text-align: center;

    img {
      width: 80px;
      height: 80px;
      display: inline-block;
      margin: 0 10px;
      border-radius: 100%;
    }
    
  }

  &__splash {
    max-width: 80%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
}
</style>
