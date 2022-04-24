const UrlParser = {
  parseUrlActiveWithCombiner() {
    const url = window.location.hash.slice(1).toLocaleLowerCase();
    const splitUrl = this.urlSplitter(url);
    return this.urlCombiner(splitUrl);
  },

  parseUrlActiveWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this.urlSplitter(url);
  },

  urlSplitter(url) {
    const urlSplits = url.split('/');
    return {
      resource: urlSplits[1] || null,
      id: urlSplits[2] || null,
      verb: urlSplits[3] || null,
    };
  },

  urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
            + (splitedUrl.id ? '/:id' : '')
            + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

export default UrlParser;
