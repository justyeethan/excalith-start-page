const defaultConfig = {
	username: "Ethan",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
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
		hoverColor: "violet"
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
						name: "Keybase",
						url: "https://keybase.io/",
						icon: "fa-brands:keybase"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com/",
						icon: "simple-icons:openai"
					},
					{
						name: "Youtube",
						url: "https://www.youtube.com/",
						icon: "bi:youtube"
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
						name: "GitLab",
						url: "https://gitlab.com",
						icon: "ph:gitlab-logo-simple-fill"
					},
					{
						name: "Dev.to",
						url: "https://dev.to",
						icon: "material-symbols:logo-dev"
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
						name: "Mastodon",
						url: "https://mastodon.social/",
						icon: "ri:mastodon-fill"
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
						name: "Neetcode",
						url: "https://neetcode.io/practice",
						icon: "tabler:brand-leetcode"
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
						name: "ML Mastery",
						url: "https://machinelearningmastery.com/blog/",
						icon: "fluent-mdl2:machine-learning"
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
						name: "Verge",
						url: "https://www.theverge.com/",
						icon: "arcticons:verge"
					},
					{
						name: "It's Foss",
						url: "https://itsfoss.com/",
						icon: "ri:mastodon-fill"
					},
					{
						name: "9To5 Linux",
						url: "https://9to5linux.com/",
						icon: "uil:linux"
					}
				]
			}
		]
	}
}

export default defaultConfig
