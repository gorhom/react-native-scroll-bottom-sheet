module.exports = {
  packages: [
    {
      type: 'category',
      label: 'Bottom Sheet',
      items: [
        'getting-started',
        'props',
        'methods',
        'hooks',
        {
          type: 'category',
          label: 'Guides',
          items: [
            'scrollables',
            'react-navigation-integration',
            'custom-handle',
            'custom-backdrop',
            'custom-background',
          ],
        },
        'troubleshooting',
        'faq',
      ],
    },
    {
      type: 'category',
      label: 'Bottom Sheet Modal',
      items: [
        'modal/getting-started',
        'modal/props',
        'modal/methods',
        'modal/hooks',
      ],
    },
  ],
};
