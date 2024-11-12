<template>
  <div class="fixed inset-0 z-20 flex flex-col items-center justify-center">
      <div class="max-w-lg mx-auto rounded overflow-hidden shadow-lg mb-4 flex flex-col items-center justify-center">
        <AppLogo></AppLogo>
        <div class="px-6 py-4 pb-2 text-center">
          <div class="font-bold text-xl mb-2">
            <h1>Nile 3D Studios</h1>
          </div>
          <AppAlert>
            <p class="text-white-700 text-base">
              Join the mailing list for updates!
            </p>
          </AppAlert>
          <AppForm></AppForm>
        </div>
      </div>
      <AppSocials></AppSocials>
  </div>
  <div class="overlay z-10 opacity-70"></div>
  <AppBackground></AppBackground>
</template>

