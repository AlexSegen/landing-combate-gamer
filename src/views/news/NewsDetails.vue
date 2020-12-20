<template>
    <page-layout title="Próximo Combat Royale" :sidebar="true">
        <template v-slot:breadcrumb>
            <ul class="cg__breadcrumb">
                <li><router-link :to="{ name: 'Home' }">Inicio</router-link></li>
                <li><router-link :to="{ name: 'News' }">Noticias</router-link></li>
                <li><span>Próximo Combat Royale</span></li>
            </ul>
        </template>

        <template v-slot:sidebar>
            <sidebar>
                <div class="cg__sidebar-widged">
                    <p class="__title">Categorías</p>
                    <div class="cg__cats-list">
                        <router-link to="/">Todas</router-link>
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

        
        <div class="cg__news-body">
            <img class="cg__news-cover" src="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/blog-pinterest-img-12.jpg" alt="Próximo Combat Royale">

            <div class="cg__news-content">

                <!-- Example htlm content  -->

                <div class="row mb-4">
                    <div class="col-sm-4">
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                        <h3>
                        Heading
                        <small class="text-muted">with muted text</small>
                        </h3>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    </div>
                    <div class="col-sm-4">
                        <h2>Example body text</h2>
                        <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                        <p>The following is <strong>rendered as bold text</strong>.</p>
                        <p>The following is <em>rendered as italicized text</em>.</p>
                        <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                    </div>
                    <div class="col-sm-4">
                        <h2>Emphasis classes</h2>
                        <p class="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
                        <p class="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p class="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                        <p class="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
                        <p class="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p class="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <p class="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>
                </div>

            
            <!-- Example htlm  content  -->
            </div>
            
        </div>

        <div class="cg__news-footer">
            
        </div>

    </page-layout>
</template>
<script>
import { News, TopPlayers } from '@/services/mockup';
import TopPlayersList from '@/components/shared/TopPlayersList'

export default {
    name: "NewsDetails",
    components: { TopPlayersList },
    data() {
        return {
            players: TopPlayers
        }
    },
}
</script>