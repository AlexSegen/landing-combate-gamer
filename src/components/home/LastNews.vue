<template>
<div class="cg__news">

    <div class="cg__news-grid">
        <a v-for="(item, index) in news" :key="'news_'+index" href="#" class="cg__news-item">
            <div class="cg__news-item-details">
                <span class="n__badge">{{item.category}}</span>
                <h2 class="n__title">{{item.title}}</h2>
                <div class="n__metas">
                    {{item.meta}}
                </div>
            </div>           
            <img class="cg__news-item-media" :src="item.media" alt="">
        </a>
    </div>

    <div class="cg__news-tools">
        <a href="#" class="btn btn-link text-white">Ver todas <i class="zmdi zmdi-arrow-right ml-1"></i></a>
    </div>

</div>
    
</template>
<script>
import { News } from '@/services/mockup';

export default {
    name: "LastNews",
    data() {
        return {
            news: News
        }
    },
    created() {
        this.news = News.splice(0,4);
    }
}
</script>
<style lang="scss" scoped>
.cg {
    &__news {
        &-tools {
            text-align: right;
            padding: 10px 15px;
        }
        &-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            grid-gap: 15px;
            margin: 5px 0 30px;

            @media(max-width: 768px) {
                grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
            }
        }

        &-item {
            position: relative;
            display: block;
            max-width: 400px;
            transition: all ease-in-out .2s;
            margin-bottom: 10px;
            box-shadow: 0 10px 10px rgba(#111, .3);

            &:hover, &:focus {
                transform: translateY(-9px);
                box-shadow: 0 15px 15px rgba(#111, .4);
            }

            &-media {
                max-width: 100%;
                height: auto;
                display: block;
                margin: 0 auto;
            }
            &-details {
                padding: 10px;
                position: absolute;
                width: 100%;
                bottom: 0;
                right: 0;
                left: 0;
                background: linear-gradient(to bottom, transparent, rgba(0, 29, 31, .76) 60%);

                .n {
                    &__badge {
                        font-size: .8rem;
                        background: var(--gray-dark);
                        padding: 2px 10px;
                    }
                    &__title {
                        color: #fff;
                        font-size: 1.5rem;
                        font-weight: 800;
                        border-inline-end: 1.8rem;
                        font-family: var(--text-header-stack);
                        margin: 10px 0 0;
                    }
                    &__metas {
                        color: var(--primary);
                        font-size: .9rem;
                        line-height: .9;
                        white-space: nowrap;
                        font-weight: normal;
                        text-transform: uppercase;
                        padding: 5px 0;
                    }
                }
            }
        }

    }
}
</style>