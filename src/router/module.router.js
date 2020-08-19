export const asyncRoutes = [
  {
    title: '系统设置',
    path: '/system',
    name: 'system',
    exact: false,
    icon: 'TwitterOutlined',
    children: [{ title: '应用管理', path: '/system/app', name: 'app', icon: 'GitlabOutlined', component: 'App' }],
  },
  {
    title: '权限管理',
    path: '/auth',
    name: 'auth',
    exact: false,
    icon: 'RedditOutlined',
    children: [
      { title: '机构管理', exact: true, path: '/auth/org', name: 'org', icon: 'GitlabOutlined', component: 'Org' },
      { title: '角色管理', exact: true, path: '/auth/role', name: 'role', icon: 'GitlabOutlined', component: 'Role' },
    ],
  },
];
