import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e66'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6dc'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '115'),
            routes: [
              {
                path: '/docs',
                component: ComponentCreator('/docs', '36e'),
                exact: true
              },
              {
                path: '/docs/hardware-support',
                component: ComponentCreator('/docs/hardware-support', 'bd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hardware-support/tabs/arduino',
                component: ComponentCreator('/docs/hardware-support/tabs/arduino', '261'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hardware-support/tabs/esp32',
                component: ComponentCreator('/docs/hardware-support/tabs/esp32', 'e57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hardware-support/tabs/raspberry-pi',
                component: ComponentCreator('/docs/hardware-support/tabs/raspberry-pi', '33a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/understand-basics/tabs/agents',
                component: ComponentCreator('/docs/understand-basics/tabs/agents', '8cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/understand-basics/tabs/device-profiles',
                component: ComponentCreator('/docs/understand-basics/tabs/device-profiles', '813'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/understand-basics/tabs/organizations',
                component: ComponentCreator('/docs/understand-basics/tabs/organizations', '5b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
