function deepScan(item, path) {
  //扫描当前项是否能匹配到当前路由
  if (item.path == path) {
    return true;
  }
  if (item.children && item.children.length) {
    return item.children.some((i) => {
      return deepScan(i, path);
    });
  }
}

export const getMapByPath = (routes, path) => {
  //根据当前路由的地址查到路由的路由表对象，以及上层的父级路由对象用于匹配面包屑
  return routes.filter((item) => {
    return deepScan(item, path);
  });
};
