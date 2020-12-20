<template>
    <page-layout title="Noticias" :sidebar="true">
        <template v-slot:breadcrumb>
            <ul class="cg__breadcrumb">
                <li><router-link :to="{ name: 'Home' }">Inicio</router-link></li>
                <li><span>Noticias</span></li>
            </ul>
        </template>

        <template v-slot:sidebar>
            <sidebar>
                <div class="cg__sidebar-widged">
                    <p class="__title">Categorías</p>
                    <div class="cg__cats-list">
                        <router-link class="__active" to="/">Todas</router-link>
                        <router-link to="/">Eventos</router-link>
                        <router-link to="/">General</router-link>
                        <router-link to="/">Novedades</router-link>
                    </div>
                </div>

                <div class="cg__sidebar-widged">
                    <p class="__title">Top Jugadores</p>
                    <TopPlayersList :small="true" :players="players"/>
                </div>
            </sidebar>
        </template>

        <div class="cg__news-grid">
            <template v-for="(item, index) in posts">
                <NewsItem :data="item" :key="'news_'+index" />
            </template>
        </div>

        <div class="cg__news-pagination">
            <nav aria-label="Page navigation example">
                <ul class="pagination cg__pagination">
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item "><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                </ul>
            </nav>
        </div>

    </page-layout>
</template>
<script>
import { News, TopPlayers } from '@/services/mockup';
import NewsItem from '@/components/shared/NewsItem'
import TopPlayersList from '@/components/shared/TopPlayersList'

export default {
    name: "News",
    components: { NewsItem, TopPlayersList },
    props: ['title', 'hasSidebar'],
    data() {
        return {
            posts: News,
            players: TopPlayers
        }
    },
}
</script>