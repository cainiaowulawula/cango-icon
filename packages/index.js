import Icongo from './congoIcon/index'
const components = [Icongo];
const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  components.map((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  Icongo
};
