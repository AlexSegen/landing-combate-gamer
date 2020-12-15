<template>
  <div class="home">
    <div class="cg__bg"></div>

    <Hero/>

    <section-layout >
      <template v-slot:title>
          <h2 class="cg__section-title __align"><small>Bienvenido a <strong class="text-primary">Combate Gamer</strong></small> <br>
                ¿De qué trata?</h2>
      </template>
      <template v-slot:description>
          <div class="row">
            <div class="col-sm-6">
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
            <div class="col-sm-6">
                <img class="cg__splash p-2" src="@/assets/img/home/logo-splash.png" alt="Combate Gamer">
            </div>
          </div>
      </template>
    </section-layout>


    <section-layout title="Top Juegos" subtitle="Los más populares" :isCentered="true" :containerFluid="true">
      <template v-slot:description>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quas sit sapiente ipsum. Ea maxime, omnis consectetur ipsum. <br/> Eligendi temporibus a perferendis facere necessitatibus ducimus incidunt enim alias atque vel.</p>
      </template>
      <template v-slot:component>
        <TopGames/>
      </template>
    </section-layout>


    <section-layout title="Últimas Partidas" subtitle="Todas las plataformas" :isCentered="true">
      <template v-slot:description>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at numquam. Facere repudiandae at dolor atque quisquam, consectetur laborum animi quae assumenda vel illo obcaecati debitis quia nostrum, rerum hic.</p>
      </template>
      <template v-slot:component>
        <LastMatches/>
      </template>
    </section-layout>
    

    
  </div>
</template>

<script>
import Hero from '@/components/home/Hero.vue'
import LastMatches from '@/components/home/LastMatches.vue'
import TopGames from '@/components/home/TopGames.vue'
import SectionLayout from '@/components/home/SectionLayout.vue'

export default {
  name: 'Home',
  components: {
    Hero, LastMatches, SectionLayout, TopGames
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
      margin: 10px;
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
