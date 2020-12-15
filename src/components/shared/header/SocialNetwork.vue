<template>
    <div class="cg__header-sn" :class="{ '__isMobile': hideForMobile}">
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
    props: ["hideForMobile"]

}
</script>
<style lang="scss" scoped>

.cg__header-sn {

    @media(max-width: 768px) {
        &.__isMobile {
            display: none;
        }
    }
}

</style>