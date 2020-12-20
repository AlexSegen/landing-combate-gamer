<template>
<div class="cg__page">
    <div class="cg__bg __alt-a"></div>
    
    <div class="cg__page-header __box">
        <div class="container">
            <div class="cg__page-header __content">
                <h1 class="cg__page-header __title __align">
                    {{title}}
                </h1>
                <slot name="breadcrumb"></slot>
            </div>
        </div>
    </div>

    <div class="cg__page-body">
        <div class="container">
            <div class="row">
                <div :class="sidebar ? 'col-sm-8': 'col-sm-12'">
                    <div class="cg__page-content">
                        
                        <slot></slot>

                    </div>
                </div>
                <div v-if="sidebar" class="col-sm-4">
                    <div class="cg__page-content">
                        
                        <slot name="sidebar"></slot>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "PageLayout",
    props: ['title', 'sidebar']
}
</script>