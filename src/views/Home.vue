<template>
  <div class="home">
    <div class="cg__bg"></div>

    <Hero/>

    <section-layout elementId="about" section="__home-tp">
      <template v-slot:description>
          <div class="row">
            <div class="col-sm-6">
                <h2 class="cg__section-title __align">
                  <small>Bienvenido a <strong class="text-primary">Combate Gamer</strong></small>
                  ¿De qué trata?
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at numquam. Facere repudiandae at dolor atque quisquam, consectetur laborum animi quae assumenda vel illo obcaecati debitis quia nostrum, rerum hic.</p>

                <div class="cg__plus">
                  <img src="http://placehold.it/80x80" alt="">
                  <img src="http://placehold.it/80x80" alt="">
                  <img src="http://placehold.it/80x80" alt="">
                  <img src="http://placehold.it/80x80" alt="">
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit illum omnis! Officiis est itaque nisi.</p>

                <!-- <p class="text-right"><a class="btn cg-btn is-secondary has-shadow" href="#">Saber más</a></p> -->
            </div>
            <div class="col-sm-6">
                <img class="cg__splash p-2" src="@/assets/img/home/logo-splash.png" alt="Combate Gamer">
            </div>
          </div>
      </template>
    </section-layout>


    <section-layout elementId="top-games" title="Top Juegos" subtitle="Los más populares" :isCentered="true" :containerFluid="true" section="cg__section-tg">
      <template v-slot:description>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quas sit sapiente ipsum. Ea maxime, omnis consectetur ipsum. <br/> Eligendi temporibus a perferendis facere necessitatibus ducimus incidunt enim alias atque vel.</p>
      </template>
      <template v-slot:component>
        <TopGames/>
      </template>
    </section-layout>


    <section-layout elementId="top-players" title="Top Jugadores" subtitle="Los mejores de CG" :isCentered="true" section="cg__section-tp">
      <template v-slot:description>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda quas sit sapiente ipsum. Ea maxime.</p>
      </template>
      <template v-slot:component>
        <TopPlayers/>
      </template>
    </section-layout>


    <section-layout title="Últimas Partidas" subtitle="Todas las plataformas" :isCentered="true" >
      <template v-slot:description>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, at numquam. Facere repudiandae at dolor atque quisquam, consectetur laborum animi quae assumenda vel illo obcaecati debitis quia nostrum, rerum hic.</p>
      </template>
      <template v-slot:component>
        <LastMatches/>
      </template>
    </section-layout>


    <section-layout :containerFluid="true">
      <template v-slot:title>
          <h2 class="cg__section-title text-center">
            <small>Novedades en <strong class="text-primary">Combate Gamer</strong></small>
            Últimas noticias
          </h2>
      </template>
      <template v-slot:component>
        <LastNews />
      </template>
    </section-layout>
    

    
  </div>
</template>

<script>
import Hero from '@/components/home/Hero'
import TopGames from '@/components/home/TopGames'
import TopPlayers from '@/components/home/TopPlayers'
import LastNews from '@/components/home/LastNews'
import LastMatches from '@/components/home/LastMatches'
import SectionLayout from '@/components/home/SectionLayout'

export default {
  name: 'Home',
  components: {
    Hero, LastMatches, SectionLayout, TopGames, TopPlayers, LastNews
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
