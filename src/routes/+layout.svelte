<script>
  import "../app.css";
</script>
<!-- vrh strani + logo -->
<div class="ml-12 mt-6 w-1/6">
<div class="flex flex-wrap items-center">
  <img class="object-cover w-32 sm:w-40 h-auto mr-4 mt-2" src="src/images/logo.png" alt="logo" />
</div>
</div>
<div class="grid grid-cols-2 gap-4 pt-2">
  <div class="border-r-2 pr-24 border-gray-700 pr-12">
    <div class="px-16 pt-4">
      <div class="text-white text-2xl md:text-5xl lg:text-5xl px-40 pt-16">
        <span class="px-12">Svetujemo,</span><br>
        <span class="px-4">investiramo in</span><br> 
        <span class="-ml-14">ustvarjamo </span><span class="font-georgiaI italic text-[#C1DDBB]">možnosti<br></span>
        <span class="px-4 font-georgiaI italic text-[#C1DDBB]">za realizacijo</span>
      </div>
      <div>
        <img class="py-8 ml-24 w-8/12 pb-8" src="src/images/Vector.png" alt="signature"/>
      </div>
      <!--random sponsors -->
      <div></div>
      <div class="mt-32"></div>
    </div>
  </div>
  <div>
    <div class="pt-16 lg:pt-36 text-center">
      <div class="lg:text-5xl">$ 1.0 M</div>
      <div class="text-gray-300 pb-16">Investiranih do danes</div>
      <div class="lg:text-5xl">8 - 12%</div>
      <div class="text-gray-300">letni optimalni<br> doprinos</div>
    </div>    
  </div>
</div>



<!-- trg-->
<div class="py-10 px-16 md:flex md:flex-col md:items-start">
  <div class="text-white text-left mb-6 pt-32">
    <p class="font-georgia text-2xl md:text-3xl lg:text-4xl">Trg kaže pot sprememb,<br>
      odločitev in priložnosti. Odnosi<br>
      in sodelovanja so bistvo rasti<br>
      ter uspešnosti.</p>
  </div>
</div>

<!-- Investiranje -->
<div class="py-10 px-8 md:flex md:flex-col" style="text-align:right; margin-right:15%;">
  <div class="text-white mb-4">
    <p class="font-georgia text-xl md:text-3xl lg:text-xl">Investiranje v nepremičnine, projekte,<br>
      potencialna podjetja in njihove izdelke so<br>
      naše ključne investicije</p>
  </div>
</div>

<!-- delaj pametno-->
<div class="py-12 px-16 md:flex md:flex-col md:items-start">
  <div class="text-white text-left mb-4">
    <p class="font-georgia text-5xl md:text-3xl lg:text-5xl">Delaj pametno, zavestno in</p>
  </div>
  <div class="text-[#D2D0FB] text-left">
    <p class="font-georgiaI  text-5xl md:text-3xl lg:text-5xl">ujami pravi trenutek</p>
  </div>
</div>



<!-- sodelovanje -->
<div class="py-24 px-16 md:flex md:flex-col">
  <div class="flex flex-wrap ">
    <img
      src="src/images/apostrof.png" alt="apostrofa" />
  </div>
  <div class="text-left mt-8 mb-4">
    <p class="font-georgia  text-4xl md:text-3xl lg:text-5xl">Sodelovanje z ljudmi, ki so<br>
      v svojem področju najbolj uspešni,<br>
      je naša največja prednost</p>
  </div>
</div>

<!-- vloge + slika-->
<div class="flex items-right py-12">
  <div class="px-16 text-2xl md:text-xl lg:text-3xl">
    <div>Z naprednim sistemom</div>
    <div>dela povezujemo,</div>
    <div>združujemo in rastemo</div>
    <div>skupaj ter ustvarjamo</div>
    <div class="text-[#C1DDBB] font-georgiaI italic">dodano vrednost</div>
  </div>
  <div>
    <img class="h-auto max-w-lg ml-auto"
        src="src/images/person2.png" alt="Person"/>
  </div>
</div>
<!-- napredni sistem + slika -->


<!-- box s številkam -->

<!-- portfolio (trenutko blank)-->
<div class="py-40"></div>

<!-- realizacija -->
<div class="py-10 px-4 md:flex md:flex-col">
  <div class="text-center mb-4">
    <p class="font-georgia text-4xl md:text-3xl lg:text-8xl">Uspešna realizacija je</p>
  </div>
  <div class="text-[#D2D0FB] text-center">
    <p class="font-georgiaI italic text-3xl md:text-3xl lg:text-7xl ">naše vodilo</p>
  </div>
</div>

<!-- footer -->
<div class="py-10 px-4 md:flex md:flex-col text-center">
  <div class="text-center mb-4">
    <p class="font-georgia regular text-xl md:text-lg lg:text-base">info@kanati.si</p>
  </div>
  <div class="text-center">
    <p class="font-georgia text-xl md:text-lg lg:text-base">+386 40 123 456</p>
  </div>
</div>

<slot />