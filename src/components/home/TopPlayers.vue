<template>
    <div class="cg__tp">
        <div class="row p-0">
            <div class="col-sm-6">
                <TopPlayersList :players="players"/>
            </div>

            <div class="col-sm-6">
                <div class="cg__tp-champion">
                    <img src="@/assets/img/champion.png" alt="">
                    <a href="#" class="btn cg-btn is-primary has-shadow">VER RANKING GLOBAL</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import {TopPlayers} from '@/services/mockup';
import TopPlayersList from '@/components/shared/TopPlayersList'

export default {
    name: "TopPlayers",
    components: { TopPlayersList },
    data() {
        return {
            players: TopPlayers
        }
    }
}
</script>
<style lang="scss" scoped>
.cg {
    &__tp {
        margin: 40px 0 0;

        &-champion {
            img {
                max-width: 100%;
                height: auto;
                display: block;
                margin: 0 auto 20px;
                @media(max-width: 768px) {
                    display: none;
                }
            }
        }
        
      /*   .tp {
            &__item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                position: relative;
                margin-bottom: 20px;

                &-box {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                    background: rgba(36, 40, 52, .35);
                    clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
                    box-shadow: 0 10px 10px rgba(17, 17, 17, 0.3);

                }
                &-position {
                    padding: 20px;
                    font-size: 4rem;
                    font-weight: 800;
                    white-space: nowrap;
                }
                &-media {
                    background: var(--dark-200);
                    img {
                        width: 90px;
                        height: 90px;
                    }
                }
                &-player {
                    width: 100%;
                }
                &-details {
                    width: 100%;
                    padding: 0 15px;
                    &-name {
                        font-size: 2rem;
                        line-height: 2.5rem;
                        margin-bottom: 5px;
                        white-space: nowrap;
                        text-align: left;
                        font-weight: 800;
                    }
                    &-metas {
                        
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        text-align: left;
                        & > li {
                            color: #999;
                            font-size: .9rem;
                            display: inline-block;
                            margin-right: 25px;
                            position: relative;
                            padding-left: 25px;
                            &:before {
                                content: "";
                                width: 18px;
                                height: 18px;
                                position: absolute;
                                left: 0;
                                top: 4px;
                                z-index: 1;
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-position: center;
                            }

                            &:first-child {
                                &:after {
                                    content: "/";
                                    z-index: 1;
                                    position: absolute;
                                    right: -15px;
                                    top: 0;
                                    opacity: .5;
                                }
                                &:before {
                                    background-image: url(/img/icons/level.png);
                                }
                            }
                            &:last-child {
                                margin-right: 0;
                                &:before {
                                    background-image: url(/img/icons/trophy.png);
                                }
                            }

                            
                        }
                    }
                }

                @media(max-width: 768px) {
                    &-media {
                        img {
                            width: 65px;
                            height: 65px;
                        }
                    }
                    &-position {
                        padding: 10px;
                        font-size: 2rem;
                    }
                    &-details {
                        &-name {
                            font-size: 1.2rem;
                            line-height: 2rem;
                        }
                    }

                    &-details {

                        &-metas {
                            & > li {
                                font-size: .75rem;
                            }
                        }
                    }

                }
            }
        } */
    }
}
</style>