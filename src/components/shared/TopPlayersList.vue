<template>
<div class="cg__tp-grid">
    <div v-for="(p, index) in players" :key="'players'+index" class="tp__item" :class="{ '__small': small }">
        <div class="tp__item-position">{{index + 1}}</div>
            <div class="tp__item-box">
                <div class="tp__item-media">
                    <img :src="p.media" alt="">
                </div>
                <div class="tp__item-details">
                    <div class="tp__item-details-name">{{p.name}}</div>
                    <ul class="tp__item-details-metas">
                        <li>{{p.level}}</li>
                        <li>{{p.wins}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>     
</template>
<script>
export default {
    name: "TopPlayersList",
    props: ["players", "small"]
}
</script>
<style lang="scss" scoped>
.tp {
    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-bottom: 20px;

        &.__small {

            .tp__item {
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

                            &:before {
                                width: 14px;
                                height: 14px;
                                top: 1px;
                            }
                        }
                    }
                }
            }
        }

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
                font-family: var(--text-header-stack);
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
        }
</style>