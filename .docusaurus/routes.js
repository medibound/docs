import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7a7'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e51'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2eb'),
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
                path: '/docs/understand-basics',
                component: ComponentCreator('/docs/understand-basics', '47f'),
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
