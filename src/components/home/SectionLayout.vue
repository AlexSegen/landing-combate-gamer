<template>
<section :id="elementId" class="cg__section cg__section __home">
    <div :class="containerFluid ? 'container-fluid': 'container'">
        <div class="row">
            <div class="col-sm-12">
                <div class="cg__section-content" :class="{'text-center': isCentered}">
                    <h2 v-if="title" class="cg__section-title"> 
                        
                        <template> <small v-if="subtitle" class="text-primary">{{subtitle}}</small> <br> </template>
                        
                        {{title}}
                    </h2>

                    <slot name="title"></slot>

                    <slot name="description"></slot>

                    <slot name="component"></slot>

                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    name: "SectionLayout",
    props: ["elementId", "title", "subtitle", "isCentered", "containerFluid"], 
}
</script>