<template>
    <div class="cg__sidebar">
        <div class="cg__sidebar-search">
            <div class="input-group">
                <input type="text" class="form-control cg__field-control" placeholder="Buscar publicación" aria-label="Buscar publicación" aria-describedby="basic-search">
                <div class="input-group-append">
                    <span class="input-group-text __icon" id="basic-search">
                        <i class="zmdi zmdi-search"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="cg__sidebar-body">

            <slot></slot>

        </div>
    </div>
</template>
<script>
export default {
    name: "Sidebar"
}
</script>