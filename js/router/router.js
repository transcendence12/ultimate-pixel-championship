// const routes = [
//   { path: '/', callback: () => console.log('Welcome screen') },
//   { path: '/wizard', callback: () => console.log('Wizard screen') },
// ];

const routes = [];
let currentPath = '';

const addRoute = (path, handler) => {
   routes.push({ path, handler });
};

const navigateTo = (path) => {
   const route = routes.find((route) => route.path === path);
   window.history.pushState({}, '', path);
   if (route) {
      route.handler();
      currentPath = path;
   } else {
      throw new Error(`Route ${path} not found`);
   }
};

const navigateForward = () => {
   const currentIndex = routes.findIndex((route) => route.path === currentPath);
   const nextIndex = currentIndex + 1;

   if (nextIndex < routes.length) {
      const nextRoute = routes[nextIndex];
      navigateTo(nextRoute.path);
   }
};

const handlePopState = () => {
   navigateTo(window.location.pathname);
};

window.addEventListener('popstate', handlePopState);

export default {
   addRoute,
   navigateTo,
   navigateForward,
};
