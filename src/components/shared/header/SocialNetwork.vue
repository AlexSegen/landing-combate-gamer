<template>
    <div class="cg__header-sn" :class="{ 'hideOnMobile': hideOnMobile, 'showOnMobile': showOnMobile}" >
        <span>Síguenos en</span>
        <a href="#"><i class="zmdi zmdi-facebook"></i></a>
        <a href="#"><i class="zmdi zmdi-twitter"></i></a>
        <a href="#"><i class="zmdi zmdi-instagram"></i></a>
        <a href="#"><i class="zmdi zmdi-youtube"></i></a>
    </div>    
</template>
<script>
export default {
    name: "SocialMetwork",
    props: ["hideOnMobile", "showOnMobile"]

}
</script>
<style lang="scss" scoped>

.cg__header-sn {

    &.hideOnMobile {
        display: block;
    }
    &.showOnMobile {
        display: none;
    }

    @media(max-width: 768px) {
        &.hideOnMobile {
            display: none;
        }
        &.showOnMobile {
            display: block;
            margin-top: 20px;
            
            a {
                width: 40px;
                height: 40px;
                font-size: 1.5rem;
            }
        }
    }
}

</style>