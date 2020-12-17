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
        padding: 20px 10px;
        font-size: .9rem;
        background: var(--dark-300);
        text-align: center;
        border-bottom: 1px solid var(--dark-300);

        span {
            color: var(--primary);
        }
    }
}
</style>