export default {
    title: 'Pgfun',
    base: process.env.NODE_ENV === 'production' ? '/Pgfun/' : '/',
    themeConfig: {
      nav: [
        { text: "指南", link: "/guild/installation" },
        { text: "组件", link: "/components/button/" },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/SailSpring/pg-fun" },
      ],
      sidebar: {
        "/guild/":[
            {
                text: "基础",
                items: [
                    {
                        text: "安装",
                        link: "/guild/installation"
                    },
                    {
                        text: "快速开始",
                        link: "/guild/quickstart"
                    }
                ]
            },
            {
                text: "进阶",
                items: [
                    {
                        text: "**",
                        link: "/guild/installation"
                    },
                ]
            }
        ],
        "/components/":[
            {
                text: "基础组件",
                items: [
                    {
                        text: "Button",
                        link: "/components/button"
                    }
                ]
            }
        ]
      }
    },
  };