<template>
    <header class="cg__header">
        <div class="cg__header-top">
            <div class="container cg__header-top-container">
                <SocialNetwork :hideForMobile="true"/>
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
                    <a class="cg__header-mobile-brand" href="#">
                        <img src="@/assets/img/cg-logo.png" alt="Combate Gamer">
                    </a>
                    <button
                    class="cg__header-mobile-btn"
                    type="button"
                    v-on-clickaway="isOpen = false"
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
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">¿De qué trata?</a></li>
                    <li><a href="#">Noticias</a></li>
                </ul>
                <div class="cg__header-brand">
                    <a href="#">
                        <img class="cg__header-brand-logo" src="@/assets/img/cg-logo.png" alt="Combate Gamer">
                    </a>
                </div>
                <ul class="cg__header-nav">
                    <li><a href="#">Top Juegos</a></li>
                    <li><a href="#">Top Jugadores</a></li>
                    <li><a href="#">Ranking General</a></li>
                </ul>
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
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleNav() {
            this.isOpen = !this.isOpen;
        }
    }

}
</script>