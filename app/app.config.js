export default function config($componentLoaderProvider){
  $componentLoaderProvider.setTemplateMapping(function (name) {
    return 'app/components/' + name + '/' + name + '.html';
  });
}