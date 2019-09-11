<template>
    <div>
    <Search></Search>
    <search-hot></search-hot>
    </div>
</template>

<script>
import Search from '@/components/searchBox'
import Search_Hot from '@/components/Search_Hot'
export default {
    components:{
        Search,
       'search-hot':Search_Hot,
    }
}
</script>

<style>

</style>
