export const dataSource = {};

dataSource.links = {
  home: {
    title: 'Home page',
    url: 'http://www.homepage.com',
  },

  currantly: {
    title: 'Currantly offer',
    url: 'http://www.currantly.com',
  },

  blurpix: {
    title: 'Blurpix',
    url: 'http://www.blurpix.com',
  },

  site: {
    title: 'Your site',
    url: 'http://www.yoursite.com',
  },

  google: {
    title: 'Google',
    url: 'http://www.google.com',
  },

  facebook: {
    title: 'Facebook',
    url: 'http://www.facebook.com',
  },

  dashboard: {
    title: 'Dashboard',
    url: 'http://www.dashboard.com',
  },

  blurax: {
    title: 'Blurax',
    url: 'http://www.blurax.com',
  },

  twitter: {
    title: 'Twitter',
    url: 'http://www.twitter.com',
  },
};

dataSource.banners = {
  bannermain: {
    title: 'Banner main',
    url: 'http://www.website.com/bannermain.gif',
  },

  signup: {
    title: 'Sign up banner',
    url: 'http://www.website.com/signup.gif',
  },

  leftside: {
    title: 'Banner left side',
    url: 'http://www.website.com/leftside.gif',
  },

  vert: {
    title: 'Vertical banner',
    url: 'http://www.website.com/vert.gif',
  },

  front: {
    title: 'Front banner',
    url: 'http://www.website.com/front.gif',
  },

  horizontal: {
    title: 'Horizontal banner',
    url: 'http://www.website.com/horizontal.gif',
  },
};

dataSource.chart = {
  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
      // 4
      label: 'Signups',
      // 5
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      // 6
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      // 7
      hidden: true,
    }]
  },
};
