<template>
    <div>
        <Header :tabArr="tabArr" />
    </div>
</template>
<script>
import Header from 'Components/header.vue'
export default {
    name: 'Home',
    components:{
       [Header.name]: Header,
    },
    data() {
        return {
            tabArr: ['首页', '热门', '活动', '智库', '政策', '音画', '培训', '直播', '区块链', '行业大数据']
        }
    }
}
</script>