export const asyncRoutes = [
  {
    title: '系统设置',
    path: '/system',
    name: 'system',
    component: 'System',
    icon: 'TwitterOutlined',
    children: [{ title: '应用管理', path: '/system/app', name: 'app', icon: 'GitlabOutlined', component: 'Class' }],
  },
  {
    title: '权限管理',
    path: '/auth',
    name: 'auth',
    // component: 'Auth',
    // redirect:
    icon: 'RedditOutlined',
    children: [
      { title: '机构管理', exact: true, path: '/auth/org', name: 'org', icon: 'GitlabOutlined', component: 'Org' },
      { title: '角色管理', exact: true, path: '/auth/role', name: 'role', icon: 'GitlabOutlined', component: 'Role' },
    ],
  },
];
