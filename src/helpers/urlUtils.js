const prefixUrl = (url, prefix) => {
  if (url && !url.toUpperCase().startsWith('HTTP')) {
    return `${prefix}${url}`;
  } else {
    return url;
  }
};

const mapPrefixUrl = (data, prefix, dataKey = '') => {
  if (Array.isArray(data) && data.length > 0) {
    data = data.map((val) => {
      if (typeof val === 'object') {
        if (dataKey && val?.[dataKey]) {
          val = {
            ...val,
            [dataKey]: prefixUrl(val?.[dataKey], prefix),
          };
        }
      } else if (typeof val === 'string' && val !== '') {
        val = prefixUrl(val, prefix);
      }
      return val;
    });
  }
  return data;
};

export { prefixUrl, mapPrefixUrl };
