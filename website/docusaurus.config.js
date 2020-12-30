module.exports={
  "title": "IDS Best Practices",
  "tagline": "Best practices and documentation at the Institute of Data Science at Maastricht University",
  "url": "https://maastrichtu-ids.github.io/",
  "baseUrl": "/best-practices/",
  "organizationName": "MaastrichtU-IDS",
  "projectName": "best-practices",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "repoUrl": "https://github.com/MaastrichtU-IDS/best-practices",
    "users": [
      {
        "caption": "Maastricht University",
        "image": "img/favicon.ico",
        "infoLink": "https://www.maastrichtuniversity.nl/",
        "pinned": true
      }
    ],
    "markdownPlugins": [
      null,
      null,
      null
    ]
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          // "homePageId": "introduction",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/MaastrichtU-IDS/best-practices/edit/master/website/",
          "path": "./docs",
          "sidebarPath": "./sidebars.json"
          // "sidebarPath": require.resolve('./sidebars.json')
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en"],
      },
    ],
  ],
  "themeConfig": {
    "hideableSidebar": true,
    "sidebarCollapsible": true,
    "announcementBar": {
      "id": 'supportus',
      "content":
        '⭐️ If you like IDS best practices, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/MaastrichtU-IDS/best-practices">GitHub</a>! ⭐️',
    },
    "navbar": {
      "hideOnScroll": false,
      "title": "Institute of Data Science",
      "logo": {
        "src": "img/favicon.ico"
        // "src": "img/ids_logo.png"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Best practices",
          "position": "left"
        },
        {
          "to": "blog/",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "left"
        },
        {
          "href": "https://github.com/MaastrichtU-IDS/best-practices",
          // "label": "GitHub",
          "position": "right",
          "className": 'header-github-link'
        }
      ]
    },
    // "image": "img/undraw_online.svg",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2020 <a href='https://maastrichtuniversity.nl/ids' target='_blank' rel='noopener noreferrer'>Institute of Data Science</a> at Maastricht University",
      // "logo": {
      //   "src": "img/favicon.ico"
      // }
    }
  }
}