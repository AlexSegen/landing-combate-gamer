<template>
    <header class="cg__header" :class="{ '__isSmall': isScrolling}">
        <div class="cg__header-top">
            <div class="container cg__header-top-container">
                <SocialNetwork :hideOnMobile="true"/>
                <div class="cg__header-actions">
                    <a class="btn btn-link" href="#">
                        <i class="zmdi zmdi-account-circle zmdi-hc-fw __icon"></i>
                       <span>Ingresar</span>
                    </a>
                    <a class="btn btn-primary" href="#">
                        <i class="zmdi zmdi-plus-circle zmdi-hc-fw __icon"></i>
                       Registrarse
                    </a>
                </div>

                <div class="cg__header-mobile" style="display: none">
                    <a href="#" class="cg__header-mobile-btn" type="button">
                        <i class="zmdi zmdi-account-circle text-primary"></i>
                    </a>
                    <router-link class="cg__header-mobile-brand" :to="{ name: 'Home'}">
                        <img src="@/assets/img/logo-gc.png" alt="Combate Gamer">
                    </router-link>
                    <button
                    class="cg__header-mobile-btn"
                    type="button"
                    v-on-clickaway="closeNav"
                    @click="toggleNav" 
                    :class="{'__isOpen': isOpen}">
                        {{ isOpen ? "&times;" : "&equiv;" }}
                    </button>
                </div>
            </div>
        </div>
        <div class="cg__header-bottom" :class="{'__isOpen': isOpen}">
            <div class="container cg__header-bottom-container">
                <ul class="cg__header-nav">
                    <li><router-link :to="{ name: 'Home'}">Inicio</router-link></li>
                    <li><a href="/#about">¿De qué trata?</a></li>
                    <li><router-link :to="{ name: 'News' }">Noticias</router-link></li>
                </ul>
                <div class="cg__header-brand">
                    <router-link :to="{ name: 'Home'}">
                        <img class="cg__header-brand-logo" src="@/assets/img/logo-gc.png" alt="Combate Gamer">
                    </router-link>
                </div>
                <ul class="cg__header-nav">
                    <li><a href="/#top-games">Top Juegos</a></li>
                    <li><a href="/#top-players">Top Jugadores</a></li>
                    <li><router-link :to="{ name: 'Ranking' }">Ranking General</router-link></li>
                </ul>
                <SocialNetwork :showOnMobile="true"/>
            </div>
        </div>
    </header>
</template>
<script>
import SocialNetwork from './SocialNetwork'
import { mixin as clickaway } from 'vue-clickaway';

export default {
    name: "cgHeader",
    components: { SocialNetwork },
    mixins: [ clickaway ],
    props: ['isScrolling'],
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleNav() {
            this.isOpen = !this.isOpen;
        },
        closeNav() {
            this.isOpen = false;
        }
    }

}
</script>