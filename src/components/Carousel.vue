<template>
    <div class="block">
        <el-carousel trigger="click" height="381px">
            <slot></slot>
<!--            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>-->
        </el-carousel>
    </div>
</template>