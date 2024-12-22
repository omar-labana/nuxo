export default defineNuxtRouteMiddleware((to, from) => {
  console.log('example middleware logging path: ', to.path);
});
