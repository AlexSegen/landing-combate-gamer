<template>
    <page-layout title="Ranking General" >
        <template v-slot:breadcrumb>
            <ul class="cg__breadcrumb">
                <li><router-link :to="{ name: 'Home' }">Inicio</router-link></li>
                <li><span>Ranking General</span></li>
            </ul>
        </template>

        <div class="cg__ranking">


            <div class="table-responsive">
                <table class="table table-hover table-borderless">
                    <thead>
                        <tr>
                            <th class="text-center">Posición</th>
                            <th>Jugador</th>
                            <th class="text-center">Nivel</th>
                            <th class="text-center">Partidas ganadas</th>
                            <th class="text-center">Juego favorito</th>
                            <th class="text-center">Plataforma Favorita</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(p, index) of players" :key="'ranking'+index">
                            <td class="text-center">{{index+1}}</td>
                            <td>
                                <div class="cg__rplayer">
                                    <img class="cg__rplayer-avatar" :src="p.media" alt="">
                                    <div class="cg__rplayer-name">{{p.name}}</div>
                                </div>
                            </td>
                            <td class="text-center">
                                {{p.level}}
                            </td>
                            <td class="text-center">
                                {{p.wins}}
                            </td>
                            <td class="text-center">
                                Free Fire
                            </td>
                            <td class="text-center">
                                Móvil
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



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
import { TopPlayers } from '@/services/mockup';
import TopPlayersList from '@/components/shared/TopPlayersList'

export default {
    name: "News",
    data() {
        return {
            players: TopPlayers
        }
    },
}
</script>