var initRoutesMap = function (router) {

  var partArea = router.createArea('part');
  partArea.mapRoute('/part/:controller?/:action?/:id?');

  var businessArea = router.createArea('business');
  businessArea.mapRoute('/business/:controller?/:action?/:id?');

  var atlasArea = router.createArea('atlas');
  atlasArea.mapRoute('/atlas/:controller?/:action?/:id?');

  var statisticsArea = router.createArea('statistics');
  statisticsArea.mapRoute('/statistics/:controller?/:action?/:id?');

  var languageArea = router.createArea('language');
  languageArea.mapRoute('/language/:controller?/:action?/:id?');

  var dictionaryArea = router.createArea('dictionary');
  dictionaryArea.mapRoute('/dictionary/:controller?/:action?/:id?');

  var systemArea = router.createArea('system');
  systemArea.mapRoute('/system/:controller?/:action?/:id?');

  var commonArea = router.createArea('common');
  commonArea.mapRoute('/', {
    controller: 'master',
    action: 'index'
  });
  commonArea.mapRoute('/:controller?/:action?/:id?');
};

module.exports = initRoutesMap;