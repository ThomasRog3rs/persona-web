import { App } from 'vue';

/**
 * Register layouts in the app instance
 *
 * @param {App<Element>} app
 */
export function registerLayouts(app: App<Element>) {
  const layouts: Record<string, any> = import.meta.globEager('./*.vue');

  Object.entries(layouts).forEach(([path, module]) => {
    if (module.default) {
      const componentName = path.replace(/\.\/|Layout|\.vue/g, '');
      app.component(componentName, module.default);
    }
  });
}
