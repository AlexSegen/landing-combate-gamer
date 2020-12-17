<template>
    <a href="#top" class="cg__gt" :class="{ 'show': isVisible}">
        <div>
            <i class="zmdi zmdi-chevron-up"></i>
            <span>Arriba</span>
        </div>
    </a>
</template>
<script>
export default {
    name: "GoTop",
    data() {
        return {
            isVisible: false
        }
    },
    mounted() {
        const _this = this;
        window.onscroll = function() {
            _this.detectScroll()
        };
    },
    methods: {
        detectScroll() {
            if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.cg {
    &__gt {
        text-align: center;
        padding: 5px 10px;
        display: none;
        opacity: .5;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 80px;
        right: 50px;
        z-index: 2;
        background: var(--gray-dark);
        border: 1px solid var(--gray-dark);
        border-bottom: 2px solid var(--primary);
        transition: all ease-in-out .2s;
        text-decoration: none;
        cursor: pointer;
        -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            
        @media(max-width: 768px) {
            padding: 5px 5px;
            bottom: 30px;
            right: 10px;

            i {
                font-size: 1.5rem;
                line-height: 1.5rem;
            }

            span {
                font-size: .6rem;
                line-height: 1rem;
                display: none;
            }
        }

        &:hover, &:focus {
            opacity: 1;
        }

        &.show {
            display: flex;
        }

        i {
            color: var(--primary);
            font-size: 2.5rem;
            line-height: 2.5rem;

        }

        span {
            color: #fff;
            font-size: .8rem;
            line-height: 1rem;
            display: block;
            text-transform: uppercase;
        }
    }
}


/**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

</style>