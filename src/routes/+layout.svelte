<script>
// @ts-nocheck

  import "../app.css";

  let selected = null;

  function toggle(id) {
    selected = selected === id ? null : id;
  }

</script>
<div class="ml-12 mt-6 w-1/6">
<div class="flex flex-wrap items-center">
  <img class="object-cover w-32 sm:w-42 lg:w-44 md:w-42  h-auto mr-4 mt-2" src="src/images/logo.png" alt="logo" />
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
  <div class="border-r-2 pr-4 md:pr-12 border-gray-700">
    <div class="px-4 md:px-16 pt-4 text-center md:text-left">
      <div class="text-white text-2xl md:text-5xl lg:text-5xl pt-16 pb-6 text-center">
        <span class="px-2 md:px-12">Svetujemo,</span><br>
        <span class="px-2 md:px-4">investiramo in</span><br> 
        <span class="px-2 -ml-14 md:-ml-2">ustvarjamo</span><span class="font-georgiaI italic text-[#C1DDBB]">možnosti<br></span>
        <span class="px-2 md:px-4 font-georgiaI italic text-[#C1DDBB]">za realizacijo</span>
      </div>
      <div class="md:mt-0">
        <img class="mx-auto md:ml-24 w-full md:w-8/12 pb-8" src="src/images/Vector.png" alt="signature"/>
      </div>
      
      <!--random sponsors -->
      <div></div>

      <div class="sm:mt-12 md:mt-16 lg:mt-32"></div>
    </div>
  </div>
  <div>
    <div class="pt-16 md:pt-36 text-center">
      <div class="text-2xl md:text-5xl">$ 1.0 M</div>
      <div class="text-gray-300 pb-16">Investiranih do danes</div>
      <div class="text-2xl md:text-5xl">8 - 12%</div>
      <div class="text-gray-300">letni optimalni<br> doprinos</div>
    </div>    
  </div>
</div>
<div class="py-10 px-8 md:px-16 md:flex md:flex-col md:items-start">
  <div class="text-center md:text-left mb-6 pt-32">
    <p class="font-georgia text-2xl md:text-3xl lg:text-5xl">Trg kaže pot sprememb,<br>
      odločitev in priložnosti. Odnosi<br>
      in sodelovanja so bistvo rasti<br>
      ter uspešnosti.</p>
  </div>
</div>
<div class="py-10 px-8 md:flex md:flex-col">
  <div class="mb-4 text-center md:text-right md:mx-auto md:w-2/3">
    <p class="font-georgia text-xl md:text-2xl lg:text-3xl -mr-24">
      Investiranje v nepremičnine, projekte,<br>
      potencialna podjetja in njihove izdelke so<br>
      naše ključne investicije
    </p>
  </div>
</div>
<div class="py-16 px-16 md:flex md:flex-col md:items-start">
  <div class="text-left mb-4">
    <p class="font-georgia text-4xl md:text-5xl lg:text-6xl">Delaj pametno, zavestno in</p>
  </div>
  <div class="text-[#D2D0FB] text-left">
    <p class="font-georgiaI text-4xl md:text-5xl lg:text-6xl">ujami pravi trenutek</p>
  </div>
</div>



<!-- vloge -->

<div class="flex flex-col-reverse lg:flex-row items-center py-24 ml-32">
  <div>
    <div class="mb-4">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="cursor-pointer" on:click={() => toggle(1)}>
        <h1 class="text-2xl">
          <span class="mr-2"></span>
          CEO
        </h1>
      </div>
      {#if selected === 1}
        <p class="mt-2">Prikazan tekst</p>
      {/if}
    </div>
    <hr>
    <div class="mb-4">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="cursor-pointer" on:click={() => toggle(2)}>
        <h1 class="text-2xl">
          <span class="mr-2"></span>
          Business Analyst
        </h1>
      </div>
      {#if selected === 2}
        <p class="mt-2">buziness</p>
      {/if}
    </div>
    <hr>
    <div class="mb-4">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="cursor-pointer" on:click={() => toggle(3)}>
        <h1 class="text-2xl">
          <span class="mr-2"></span>
          Business Analyst
        </h1>
      </div>
      {#if selected === 3}
        <p class="mt-2">dsa.</p>
      {/if}
    </div>
    <hr>
    <div class="mb-4">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="cursor-pointer" on:click={() => toggle(4)}>
        <h1 class="text-2xl">
          <span class="mr-2"></span>
          COO
        </h1>
      </div>
      {#if selected === 4}
        <p class="mt-2">cook</p>
      {/if}
    </div>
    <hr>
    
  </div>
  <div class="flex-1 mt-12 lg:mt-0 flex justify-end items-center">
    <div class="w-180 h-180 rounded-l-full overflow-hidden ml-auto">
      <img class="h-full w-full object-cover" src="src/images/person1.png" alt="Person1" style="max-width: 100%"/>
    </div>
  </div>
</div>



<!-- sodelovanje -->
<div class="py-24 px-16 md:flex md:flex-col">
  <div class="flex flex-wrap ">
    <img
      src="src/images/apostrof.png" alt="apostrofa" />
  </div>
  <div class="text-left mt-8 mb-4">
    <p class="font-georgia text-4xl md:text-5xl lg:text-5xl" style="line-height: 3rem;">
      Sodelovanje s KANATI je<br>
      enostavno, zanesljivo,<br>
      transparentno in donosno.
    </p>
  </div>  
</div>
<div class="flex flex-col-reverse lg:flex-row items-center py-24">
  <div class="flex-1 px-16 text-2xl md:text-3xl lg:text-5xl text-center lg:text-left tracking-tight md:tracking-normal">
    <div>Z naprednim sistemom</div>
    <div>dela povezujemo,</div>
    <div>združujemo in rastemo</div>
    <div>skupaj ter ustvarjamo</div>
    <div class="text-[#C1DDBB] font-georgiaI italic">dodano vrednost</div>
  </div>
  <div class="flex-1 mt-12 lg:mt-0">
    <img class="h-auto max-w-lg mx-auto lg:mx-0"
        src="src/images/person2.png" alt="Person"/>
  </div>
</div>
<div class="flex items-center justify-center">
  <div class="border border-gray-600 p-8">
    <div class="flex flex-wrap justify-center py-6">
      <div class="flex flex-col items-center mr-8 ml-6 mb-6 lg:mb-0 lg:border-r lg:border-gray-600 lg:pr-12">
        <div class="text-7xl md:text-3xl lg:text-6xl font-bold leading-none">8-12%</div>
        <div class="text-2xl lg:text-xl text-gray-400">LOD</div>
      </div>
      <div class="flex flex-col items-center mr-8 mb-6 lg:mb-0 lg:border-r lg:border-gray-600 lg:pr-20 lg:pl-16">
        <div class="text-7xl md:text-3xl lg:text-6xl font-bold leading-none">24X</div>
        <div class="text-2xl lg:text-xl text-gray-400">investiramo</div>
      </div>
      <div class="flex flex-col items-center mr-6 ml-6 mb-6 lg:mb-0">
        <div class="text-7xl md:text-3xl lg:text-6xl font-bold leading-none">12X</div>
        <div class="text-2xl lg:text-xl text-gray-400">analizirano</div>
      </div>
    </div>
  </div>
</div>




<!-- portfolio (trenutko blank)-->
<div class="py-40"></div>

<!-- realizacija -->
<div class="py-10 px-4 md:flex md:flex-col">
  <div class="text-center mb-4">
    <p class="font-georgia text-4xl md:text-5xl lg:text-8xl">Uspešna realizacija je</p>
  </div>
  <div class="text-[#D2D0FB] text-center">
    <p class="font-georgiaI italic text-3xl md:text-4xl lg:text-7xl">naše vodilo</p>
  </div>
</div>
<div class="py-10 px-4 md:flex md:flex-col text-center">
  <div class="text-center mb-2">
    <p class="font-georgia regular text-base md:text-lg lg:text-base">info@kanati.si</p>
  </div>
  <div class="text-center">
    <p class="font-georgia text-base md:text-lg lg:text-base">+386 40 123 456</p>
  </div>
</div>

<slot />