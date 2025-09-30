export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Blueprint Web Dev",
  description: "Professional Website Development Services",
  NavData: [
		{
			title: 'Home',
			link: '/',
			external: false
		},
		{
			title: 'Services',
			link: '#Services',
			external: false
		},
		{
			title: 'About',
			link: '#About',
			external: false
		},
		{
			title: 'Projects',
			link: '#Projects',
			external: false
		},
		{
			title: 'Contact Us',
			link: '#Contact',
			external: false
		},
	],
  links: {
    facebook: "https://www.facebook.com/bivensblueprint",
    instagram: "https://www.instagram.com/bivensjeremy",
    business: "https://www.bivensblueprint.com",
    linkedin: "https://www.linkedin.com/in/bivensjeremy",
    business2: "https://www.blueprintwebdev.com"
  },
  company: {
    phone: "478-280-8388",
    address: ["779 Fiveash Rd", "Oakfield, GA 31772"],
    email: "admin@bivensblueprint.com",
    lead: "https://bivensblueprintllc.hbportal.co/public/blueprintwebdevleadform"
  }
};
