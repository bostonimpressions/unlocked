<template>
  <footer class="bg-[#0e1a20] text-white mt-auto">
    <div class="border-t-4 border-orange-500"></div>

    <div class="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Quick Links -->
      <div>
        <h3 class="text-sky-400 font-bold text-lg mb-4">QUICK LINKS</h3>
        <ul class="space-y-3">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">About</a></li>
          <li><a href="#" class="hover:underline">Real Estate Agents</a></li>
          <li><a href="#" class="hover:underline">Homeowners</a></li>
          <li><a href="#" class="hover:underline">Real Estate Investors</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="md:border-x border-gray-500 px-4">
        <h3 class="text-sky-400 font-bold text-lg mb-4">CONTACT</h3>
        <div class="space-y-3">
          <p class="flex items-center gap-2 text-orange-500 font-semibold">
            <span class="material-icons">call</span> 603-691-1364
          </p>
          <p>
            <a href="mailto:admin@unlockedhomeproject.com" class="text-orange-500 font-semibold">
              admin@unlockedhomeproject.com
            </a>
          </p>
          <p class="text-white">954 Whittier Hwy, Moultonborough, NH 03254</p>
        </div>
      </div>

      <!-- Social -->
      <div>
        <h3 class="text-sky-400 font-bold text-lg mb-4">SOCIAL</h3>
        <ul class="space-y-3">
          <li class="flex items-center gap-3">
            <span class="bg-orange-500 text-black p-2 rounded">G</span>
            <a href="#" class="hover:underline text-orange-500">Write us a review!</a>
          </li>
          <li class="flex items-center gap-3">
            <span class="bg-orange-500 text-black p-2 rounded">▶</span>
            <a href="#" class="hover:underline text-orange-500">Unlocked Creative RealEstate</a>
          </li>
          <li class="flex items-center gap-3">
            <span class="bg-orange-500 text-black p-2 rounded">f</span>
            <a href="#" class="hover:underline text-orange-500">Unlocked Home Project</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-500 py-4 text-center text-orange-500 text-sm">
      <a href="#" class="hover:underline">PRIVACY POLICY</a>
      <span class="mx-2">|</span>
      <a href="#" class="hover:underline">TERMS AND CONDITIONS</a>
    </div>
  </footer>
</template>

<style scoped>
/* Ensure footer sticks to bottom for short pages */
:deep(body) {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
:deep(#app) {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
