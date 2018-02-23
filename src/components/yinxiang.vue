<template>
    <div>
      1,Number(false) 0
        Number(true) 1
        Number(undefined) NaN
        Number(null) 0
        Number( "5.5 ") 5.5
        Number( "56") 56
        Number( "5.6.7 ") NaN
        Number(new Object()) NaN
        Number(100) 100

    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
<style scoped>
  body{
    background-color:#ff0000;
  }
</style>
