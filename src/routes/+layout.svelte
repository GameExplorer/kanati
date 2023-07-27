<script>
// @ts-nocheck
  import "../app.css";

  let selected = null;

  function toggle(id) {
    selected = selected === id ? null : id;
  }

</script>

<!-- LOGO -->
<img class="w-[150px] md:w-[200px] object-cover m-12" src="/images/logo.png" alt="logo" />

<div class="h-[25px] md:h-[50px]"></div>

<!-- SVETUJEMO, INVESTIRAMO IN USTVARJAMO MOZNOSTI SPLIT -->
<div class="grid grid-cols-1 gap-2">
    <div class="m-auto w-10/12 md:w-auto">
        <div class="text-4xl md:text-5xl px-12 py-8 text-center">
            <div>Svetujemo, investiramo in ustvarjamo <span class="font-georgiaI text-[#CBC4B7]">možnosti za rast.</span> </div>
            <img class="w-10/12 m-auto pt-8" src="/images/underline.svg" alt="signature"/>
            <!--random sponsors -->
            <div></div>
        </div>
    </div>
</div>

<!-- WHEN WE ADD % AND ALREADY INVESTED MONEY -->
<!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div class="border-0 border-b md:border-0 md:border-r-2 border-gray-700 m-auto w-10/12 md:w-auto">
        <div class="text-4xl md:text-5xl px-12 py-8 text-center">
            <div>Svetujemo, investiramo in ustvarjamo <span class="font-georgiaI text-[#CBC4B7]">možnosti za rast.</span> </div>
            <img class="w-10/12 m-auto pt-8" src="/images/underline.svg" alt="signature"/>
            random sponsors
            <div></div>
        </div>
    </div>

    <div class="flex flex-col text-center justify-center py-8">
        <div class="text-5xl">$ 1.0 M</div>
        <div class="text-gray-300 pb-16">Investiranih do danes</div>
        <div class="text-5xl">8 - 10%</div>
        <div class="text-gray-300">letni optimalni<br> doprinos</div>
    </div>
</div> -->

<div class="h-[100px] md:h-[200px]"></div>

<!-- TRG KAZE POT SPREMEMB -->
<div class="max-w-[800px] text-4xl md:text-5xl px-12">
    Trg kaže pot sprememb,
    odločitev in priložnosti.
</div>
<div class="max-w-[800px] float-right text-right text-3xl md:text-4xl p-12">
    Svetujemo in investiramo v nepremičnine, premičnine, v podjetja z lastnimi izdelki ali podjetja, ki potrebujejo hitro likvidnost za ustvarjanje večje dodane vrednosti.
</div>

<div class="h-[300px]"></div>

<!-- DELAJ PAMETNO... -->
<div class="px-16 text-4xl md:text-5xl text-left mb-4">
    Delamo pametno, zavestno in<br class="hidden md:block">
    <span class="text-[#D2D0FB] font-georgiaI text-4xl md:text-5xl">čakamo pravi trenutek.</span>
</div>

<div class="h-[100px]"></div>

<!-- TITLES -->
<div class="mx-12 md:mr-0 grid grid-cols-1 md:grid-cols-3">
    <div class="flex flex-col justify-center col-start-1 col-span-1">
        <div>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="cursor-pointer" on:click={() => toggle(1)}>
                <h1 class="text-3xl lg:text-4xl mb-2">
                    CEO
                </h1>
            </div>
            {#if selected === 1}
                <p class="my-4">
                    <b>Iztok Rekelj - direktor / manager </b><br>
                    Večletne izkušnje na področju sektorja financiranja,
                    poslovnega svetovanja in investiranja. Poslovna pot se je začela leta 2008,
                    ko se je srečal z zavarovalništvom, leta 2009 spoznal področje skladov,
                    plemenitih kovin in drugih inštrumentov investiranja,
                    2010 odprl prvo podjetje za poslovno svetovanje in investiranje.
                    Nadaljeval je pot investiranja skozi bančni sektor, javnih razpisov in vlaganja tujega ter lastnega kapitala.<br><br>
                    <b>Žiga Kosmatin - odvetnik / partner</b><br>
                    Večletne izkušnje na področju pravnega svetovanja,
                    zastopanja in vodenja poslov. Svojo pot začel leta
                    x v odvetniški pisarni Senica, kjer je svoje izkušnje nabiral x let.
                    Skrbel za …. In nato leta x odprl lastno odvetniško pisarno
                    ter kasneje tudi postal partner podjetja KANATI d.o.o..
                </p>
            {/if}
        </div>
        <hr>
        <div class="mt-4">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="cursor-pointer" on:click={() => toggle(4)}>
                <h1 class="text-3xl lg:text-4xl mb-2">
                    COO
                </h1>
            </div>
            {#if selected === 4}
                <p class="my-4">
                    <b>Vesna Stipetić</b> ima večletne izkušnje na področju operative.
                    Skrbi za vso potrebno dokumentacijo, operativni del posla in komunikacijo.
                    Vodi operativni del od pričetka sodelovanja do končne realizacjje posla.
                </p>
            {/if}
        </div>
        <hr>
        <div class="mt-4">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="cursor-pointer" on:click={() => toggle(3)}>
                <h1 class="text-3xl lg:text-4xl mb-2">
                    Business Analyst
                </h1>
            </div>
            {#if selected === 3}
                <p class="my-4">
                    Skrbimo za skrbni pregled posla, oceno tveganja in možnost investiranja. Nadaljnjo redno komunikacijo in pomoč pri rasti in razvoju.
                </p>
            {/if}
        </div>
        <hr>
    </div>

    <!-- IMAGE -->
    <img class="col-start-3 hidden md:block rounded-l-full ml-auto w-180 h-180 object-cover" src="/images/person1.png" alt="Person1" style="max-width: 100%"/>
</div>

<div class="h-[100px]"></div>

<!-- APOSTROF IN SODELOVANJE S KANATI -->
<div class="mx-12">
    <img class="mb-4" src="/images/apostrophe.svg" alt="apostrofa" />
    <div class="text-4xl md:text-5xl">
        Sodelovanje s KANATI je<br class="hidden md:block">
        enostavno, hitro, zanesljivo<br class="hidden md:block">
        in transparentno.
    </div>
</div>

<div class="h-[100px]"></div>

<!-- Z NAPREDNIM SISTEMOM... -->
<div class="flex flex-col-reverse lg:flex-row items-center">
    <div class="flex-1 mx-16 text-4xl lg:text-5xl tracking-tight">
        Z naprednim sistemom dela povezujemo, združujemo in rastemo skupaj ter ustvarjamo<br>
        <span class="text-[#C1DDBB] font-georgiaI">dodano vrednost</span>
    </div>
    <!-- IMAGE -->
    <div class="flex-1 mb-12 lg:mb-0 mx-12">
        <img class="object-cover max-w-[400px] mx-auto" src="/images/person2.png" alt="Person"/>
    </div>
</div>

<div class="h-[100px]"></div>

<!-- TABELA -->
<!-- <div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-3 mx-12 border border-gray-600 p-8 w-3/5 md:w-full">
        <div class="text-center pb-4 md:p-0 border-b md:border-0 md:border-r border-gray-600">
            <div class="text-6xl font-bold">12</div>
            <div class="text-2xl lg:text-xl text-gray-400">Communication</div>
        </div>
        <div class="text-center py-4 md:p-0 border-b md:border-0 md:border-r border-gray-600">
            <div class="text-6xl font-bold">24</div>
            <div class="text-2xl lg:text-xl text-gray-400">Analisys</div>
        </div>
        <div class="text-center pt-4 md:p-0">
            <div class="text-6xl font-bold">36</div>
            <div class="text-2xl lg:text-xl text-gray-400">Investing</div>
        </div>
    </div>
</div> -->

<!-- portfolio (trenutno blank)-->
<div class="h-[100px]"></div>

<!-- USPESNA REALIZACIJA JE NASE VODILO-->
<div class="text-center mx-12">
    <div class="text-4xl md:text-5xl">
        Konstantna rast je <span class="font-georgiaI text-[#D2D0FB] italic">naše vodilo</span>
        <img class="xl:w-5/12 w-8/12 m-auto pt-8" src="/images/underline.svg" alt="signature"/>
    </div>
</div>

<div class="h-[50px]"></div>

<!-- FOOTER -->
<div class="pb-12 text-center md:text-lg lg:text-base">
    <a href="mailto:info@kanati.si">info@kanati.si</a><br>
    <a href="tel:+386 40 123 456">+386 40 123 456</a>
</div>

<slot />