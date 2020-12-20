<template>
    <div class="cg__tg">

        <div class="cg__tg-container" >

            <div class="cg__tg-tabs">
                <button @click="filterItems('all')" :class="{'__active': filter =='all'}" type="button" class="cg__tg-tab">Todas</button>
                <button @click="filterItems('PC')" :class="{'__active': filter =='PC'}" type="button" class="cg__tg-tab">PC</button>
                <button @click="filterItems('Móvil')" :class="{'__active': filter =='Móvil'}" type="button" class="cg__tg-tab">Móvil</button>
            </div>

            <div class="cg__tg-carousel" >

                <slick class="cg__hero-slick-" ref="slick" :options="slickOptions">
                    <div v-for="(g, index) in games" :key="'index_tg'+index" class="cg__tg-item">
                        <div class="tg__item-platform">{{g.platform}}</div>

                        <div class="tg__item-media">
                            <img :src="g.media" :alt="g.name">
                        </div>

                        <div class="tg__item-name">{{g.name}}</div>

                        <div class="tg__item-metas">

                        </div>
                        <div class="tg__item-actions">
                            <a href="#" class="btn btn-outline-primary">Crear partida</a>
                        </div>
                    </div>
                </slick>
                <button @click="$refs.slick.prev()"   type="button" class="cg__slick-arrow __prev"><i class="zmdi zmdi-chevron-left zmdi-hc-fw arrow-ico"></i> Anterior </button>
                <button @click="$refs.slick.next()" type="button" class="cg__slick-arrow __next">Siguiente <i class="zmdi zmdi-chevron-right zmdi-hc-fw arrow-ico"></i></button>

            </div>

        </div>

    </div>
</template>
<script>
import utils from '@/helpers/utils'
import { TopGames } from '@/services/mockup'
export default {
    name: "TopGames",
    data() {
        return {
            games: TopGames,
            tmp: TopGames,
            filter: "all",
            slickOptions: {
                slidesToShow: 5,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                centerMode: true,
                centerPadding: '60px',
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            },
        }
    },
    created() {
        this.games = utils.shuffleArray(this.tmp);
    },
    methods: {
        filterItems(str) {
            this.filter = str;

            if (this.filter !== "all")
                this.games = [...this.tmp.filter(item => item.platform === this.filter)];
            else
                this.games = [...this.tmp];
            
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.cg {
    &__slick-arrow {
        bottom: -40px;
    }
    &__tg {
        &-carousel {
            position: relative;
            padding: 20px 0;
        }
        &-tabs {
            padding: 30px 0 10px;
        }
        &-tab {
            background: #102222;
            color: #fff;
            font-size: 1.2rem;
            line-height: 1.2rem;
            margin: 0 5px;
            text-transform: uppercase;
            font-weight: 600;
            border: 1px solid #102222;
            padding: 5px 15px;
            min-width: 90px;
            outline: none;
            border-bottom: 2px solid #102222;
            &.__active {
                border-bottom: 2px solid var(--primary);
            }

            @media(max-width: 500px) {
                font-size: 1rem;
            }
        }
        &-item {
            max-width: 300px;
            padding: 15px;
            margin: 5px;
            margin: 20px 0;
            background: rgba(#102222, .7);
            transition: all ease-in-out .2s;
            box-shadow: 0 15px 15px rgba(0,0,0,0.2);
            opacity: .7;
            clip-path: polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,20px 100%,0 calc(100% - 20px));
            -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

            &:hover, &:focus {
                background: rgba(#102222, 1);
                transform: translateY(-10px);
            }

            .tg {
                &__item {
                    &-platform {
                        font-size: .8rem;
                        margin: 15px 0;
                        color: var(--primary);
                    }
                    &-name {
                        color: #fff;
                        font-weight: 800;
                        text-transform: uppercase;
                        font-size: 1.2rem;
                        width: 90%;
                        margin: 15px auto;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        @media(max-width: 767px) {
                            font-size: 1rem;
                        }
                    }
                    &-media {
                        margin: 10px 0;

                        img {
                            max-width: 150px;
                            height: auto;
                            display: block;
                            margin: 0 auto;
                            border-radius: 5px;
                            box-shadow: 0 10px 10px rgba(0, 20, 21, .46);
                        }
                    }
                }
            }
        }
    }
}


/**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>