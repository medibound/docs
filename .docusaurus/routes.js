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
    component: ComponentCreator('/docs', '31d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c14'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/docusaurus',
            component: ComponentCreator('/docs/tags/docusaurus', '817'),
            exact: true
          },
          {
            path: '/docs/tags/facebook',
            component: ComponentCreator('/docs/tags/facebook', '925'),
            exact: true
          },
          {
            path: '/docs/tags/hello',
            component: ComponentCreator('/docs/tags/hello', 'c8e'),
            exact: true
          },
          {
            path: '/docs/tags/hola',
            component: ComponentCreator('/docs/tags/hola', '3c3'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'fcf'),
            routes: [
              {
                path: '/docs',
                component: ComponentCreator('/docs', '2ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blog/2021-08-26-welcome/welcome',
                component: ComponentCreator('/docs/blog/2021-08-26-welcome/welcome', '48f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blog/first-blog-post',
                component: ComponentCreator('/docs/blog/first-blog-post', 'f02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blog/long-blog-post',
                component: ComponentCreator('/docs/blog/long-blog-post', '581'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blog/mdx-blog-post',
                component: ComponentCreator('/docs/blog/mdx-blog-post', 'e75'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics-1',
                component: ComponentCreator('/docs/category/tutorial---basics-1', '005'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '9ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras-1',
                component: ComponentCreator('/docs/category/tutorial---extras-1', '70c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/intro',
                component: ComponentCreator('/docs/docs/intro', '436'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/docs/tutorial-basics/congratulations', '7b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-blog-post', '3b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-document', '990'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-page', 'af0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/docs/tutorial-basics/deploy-your-site', 'ada'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/docs/tutorial-basics/markdown-features', 'de7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/docs/tutorial-extras/manage-docs-versions', 'b63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/docs/tutorial-extras/translate-your-site', '1ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/src/pages/markdown-page',
                component: ComponentCreator('/docs/src/pages/markdown-page', '311'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '108'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '951'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '4f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '978'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'f9a'),
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
