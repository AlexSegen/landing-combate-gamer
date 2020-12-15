<template>
    <footer class="cg__footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="cg__footer-content">
                        &copy; <span>Combate Gamer</span> , 2019 - {{ (new Date()).getFullYear()}}
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "cgFooter"
}
</script>
<style lang="scss" scoped>
.cg {
    &__footer {
        color: #ddd;
        font-size: .9rem;
        background: #111;
        border-bottom: 1px solid #111;
        padding: 10px;
        text-align: center;

        span {
            color: var(--primary);
        }
    }
}
</style>