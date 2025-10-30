// 将 lodash 注入到 Hexo 的模板变量中，使 EJS 模板可以使用 _
const _ = require('lodash');

hexo.extend.filter.register('template_locals', function(locals) {
  locals._ = _;
  return locals;
});
