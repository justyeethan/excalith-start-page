const defaultConfig = {
	username: "Ethan",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#000c7c",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "blue"
	},
	search: {
		default: "https://duckduckgo.com/?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "Portfolio",
						url: "https://ethanyee.info",
						icon: "mdi:web"
					},
					{
						name: "Netflix",
						url: "http://www.netflix.com/",
						icon: "mdi:netflix"
					},
					{
						name: "Youtube",
						url: "https://www.youtube.com/",
						icon: "bi:youtube"
					},
					{
						name: "Music",
						url: "https://music.youtube.com/",
						icon: "simple-icons:youtubemusic"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com",
						icon: "mdi:github"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com/",
						icon: "simple-icons:openai"
					},
					{
						name: "Vercel",
						url: "https://vercel.com/",
						icon: "ion:logo-vercel"
					},
					{
						name: "Stack Overflow",
						url: "https://stackoverflow.com/",
						icon: "mdi:stack-overflow"
					}
				]
			},
			{
				title: "Social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Twitter",
						url: "https://twitter.com",
						icon: "mdi:twitter"
					},
					{
						name: "LinkedIn",
						url: "https://www.linkedin.com/feed/",
						icon: "mdi:linkedin"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "Instagram",
						url: "https://www.instagram.com/",
						icon: "mdi:instagram"
					}
				]
			},
			{
				title: "Education",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Canvas",
						url: "https://canvas.uw.edu/",
						icon: "arcticons:canvasstudent"
					},
					{
						name: "Gradescope",
						url: "https://www.gradescope.com/",
						icon: "material-symbols:code"
					},
					{
						name: "Drive",
						url: "https://drive.google.com/drive/u/1/my-drive",
						icon: "material-symbols:add-to-drive"
					},
					{
						name: "Docs",
						url: "https://docs.google.com/",
						icon: "iconoir:google-docs"
					}
				]
			},
			{
				title: "Research",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Scholar",
						url: "https://scholar.google.com/",
						icon: "academicons:google-scholar"
					},
					{
						name: "Overleaf",
						url: "https://overleaf.com/",
						icon: "simple-icons:overleaf"
					},
					{
						name: "SAIL",
						url: "https://ai.stanford.edu/",
						icon: "bi:filetype-ai"
					},
					{
						name: "CS4Env",
						url: "https://cs4env.uw.edu/",
						icon: "pajamas:machine-learning"
					}
				]
			},
			{
				title: "Tech",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "TechCrunch",
						url: "https://techcrunch.com/",
						icon: "game-icons:techno-heart"
					},
					{
						name: "Y-Combinator",
						url: "https://www.ycombinator.com/",
						icon: "cib:y-combinator"
					},
					{
						name: "Leetcode",
						url: "https://leetcode.com/",
						icon: "simple-icons:leetcode"
					},
					{
						name: "Neetcode",
						url: "https://neetcode.io/practice",
						icon: "bi:rocket-fill"
					}
				]
			}
		]
	}
}

export default defaultConfig
