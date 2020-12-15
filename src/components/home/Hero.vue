<template>
    <div class="cg__hero">
        <div class="cg__hero-carousel">
            <slick
            class="cg__hero-slick"
                ref="slick"
                :options="slickOptions"
                @afterChange="handleAfterChange"
                @beforeChange="handleBeforeChange"
                @breakpoint="handleBreakpoint"
                @destroy="handleDestroy"
                @edge="handleEdge"
                @init="handleInit"
                @reInit="handleReInit"
                @setPosition="handleSetPosition"
                @swipe="handleSwipe"
                @lazyLoaded="handleLazyLoaded"
                @lazyLoadError="handleLazeLoadError">
                <div class="cg__slick-item"><img src="/img/hero/01.png" alt="CombatRoyale"></div>
                <div class="cg__slick-item"><img src="/img/hero/02.png" alt="CombatRoyale"></div>
                <div class="cg__slick-item"><img src="/img/hero/01.png" alt="CombatRoyale"></div>
                <div class="cg__slick-item"><img src="/img/hero/02.png" alt="CombatRoyale"></div>
            </slick>
            <button @click="$refs.slick.prev()"   type="button" class="cg__slick-arrow __prev"><i class="zmdi zmdi-chevron-left zmdi-hc-fw arrow-ico"></i> Anterior </button>
            <button @click="$refs.slick.next()" type="button" class="cg__slick-arrow __next">Siguiente <i class="zmdi zmdi-chevron-right zmdi-hc-fw arrow-ico"></i></button>
        </div>
    </div>
</template>
<script>

export default {
    name: "Hero",
     data() {
        return {
            slickOptions: {
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 3000,
                centerPadding: '60px',
               /*  responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ] */
            },
        };
    },
     methods: {
        next() {
            this.$refs.slick.next();
        },

        prev() {
            this.$refs.slick.prev();
        },

        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        },
        // Events listeners
        handleAfterChange(event, slick, currentSlide) {
            console.log('handleAfterChange', event, slick, currentSlide);
        },
        handleBeforeChange(event, slick, currentSlide, nextSlide) {
            console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
        },
        handleBreakpoint(event, slick, breakpoint) {
            console.log('handleBreakpoint', event, slick, breakpoint);
        },
        handleDestroy(event, slick) {
            console.log('handleDestroy', event, slick);
        },
        handleEdge(event, slick, direction) {
            console.log('handleEdge', event, slick, direction);
        },
        handleInit(event, slick) {
            console.log('handleInit', event, slick);
        },
        handleReInit(event, slick) {
            console.log('handleReInit', event, slick);
        },
        handleSetPosition(event, slick) {
            console.log('handleSetPosition', event, slick);
        },
        handleSwipe(event, slick, direction) {
            console.log('handleSwipe', event, slick, direction);
        },
        handleLazyLoaded(event, slick, image, imageSource) {
            console.log('handleLazyLoaded', event, slick, image, imageSource);
        },
        handleLazeLoadError(event, slick, image, imageSource) {
            console.log('handleLazeLoadError', event, slick, image, imageSource);
        },
    }
}
</script>