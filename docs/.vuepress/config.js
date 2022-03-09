module.exports = {
    // site config
    base: '/angular-security-training/',
    lang: 'en-US',
    title: 'Angular Security Hardening Training',
    description: 'Learn how to prevent common threats in your Angular web application !',
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
       // ['meta', { name: 'theme-color', content: '#C3002F' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    // theme and its config
   // theme: '@vuepress/theme-default',
    themeConfig: {

        logo: '/logo.svg',
        sidebar: [
            "/prerequisites/",
            "/common-threats/",
            "/common-threats/csrf/csrf-overview.md",
            "/common-threats/csrf/csrf-detection.md",
            "/common-threats/csrf/csrf-angular.md",
            "/common-threats/csrf/csrf-defense.md",
            "/common-threats/csrf/csrf-pw.md",
            "/common-threats/xss/xss-overview.md",
            "/common-threats/xss/xss-detection.md",
            "/common-threats/xss/xss-angular.md",
            "/common-threats/xss/xss-defense.md",
            "/common-threats/xss/xss-pw.md",
            "/continuous-prevention/",
        ]
    },
}