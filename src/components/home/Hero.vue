<template>
    <div class="cg__hero">
        <div class="cg__hero-carousel">
            <slick
            class="cg__hero-slick"
                ref="slick"
                :options="slickOptions">
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
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1
                        }
                    }
                ]
            },
        };
    }
}
</script>