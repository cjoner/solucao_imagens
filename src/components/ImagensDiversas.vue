<!--      Otimização de imagens    -->
      
<!-- OPÇÃO 1 (Thumbnails - MAIS EFICIENTE)-->
<!-- <template>
  <div>
    <p>
      <img src="@/assets/img3.png" 
           srcset="@/assets/img3-400w.png 400w, 
                   @/assets/img3-800w.png 800w" 
           sizes="(max-width: 600px) 400px, 800px" 
           width="800" 
           height="400"
           alt="arara vermelha com detalhes verdes e azuis voando por cima d'agua">
    </p>
    <section id="imagens_baixo">
      <img src="@/assets/img4.jpg"
           srcset="@/assets/img4-200w.jpg 200w,
                   @/assets/img4-400w.jpg 400w" 
           sizes="(max-width: 600px) 200px, 400px" 
           width="400" 
           height="250" 
           class="pequenas"
           alt="um grupo de hienas, marrons e pretas, prestes a caçar">
      <img src="@/assets/img5.jpg"
           srcset="@/assets/img5-200w.jpg 200w,
                   @/assets/img5-400w.jpg 400w" 
           sizes="(max-width: 600px) 200px, 400px" 
           width="400" 
           height="250" 
           class="pequenas"
           alt="um tigre deitado descansando">
    </section>
  </div>
</template> -->

<!-- OPÇÃO 2 (Pré-carregamento - MENOS EFICIENTE)-->
<template>
  <div>
    <p>
      <img src="../assets/img3.png" rel="preload" width="800" height="400">
    </p>
    <section id="imagens_baixo">
      <img src="../assets/img4.jpg" rel="preload" width="400" height="250" class="pequenas">
      <img src="../assets/img5.jpg" rel="preload" width="400" height="240" class="pequenas">
    </section>
  </div>
</template>

<!--------------- CSS E JS ---------------->
  <script>
  export default {
    name: 'ImagensDiversas'
  }
  </script>
  


<style>

#imagens_baixo{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

img{
    margin: 5px;
}

#imagen_cima{
    display: flex;
  justify-content: center;
}


@media (max-width: 800px){
    #imagens_baixo{
        display: flex;
        flex-direction: column;
    }

    .pequenas{
        width: 400px;
    }
}


</style>