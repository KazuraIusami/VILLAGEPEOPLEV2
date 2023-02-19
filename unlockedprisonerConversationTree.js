let unlockedprisonerconversation = {
	NPCName: "Unlocked Prisoner",
	
	start: {
		text: "Thank you! Thank you! You have free'd me from my hell!",
		
		options: [
			{
				text: "What will you do now that you are free?",
				next: "plan"
			},
			{
				text: "Why were you in there?",
				next: "interrogate"
			}
		]
	},
	plan: {
		text: "Heh...Don't worry about that. Now that you have let me out, me 'n you are even steven.",
		
		options: [
			{
				text: "Why were you in there?",
				next: "interrogate"
			}
		]
	},
	interrogate: {
		text: "Doesn't matter now. That bitch and the big cheese don't stand a chance against us.",
		
		options: [
			{
				text: "I will help you get your revenge",
				next: "help"
			},
			{
				text: "I'm NOT going to help you with this sick errand!",
				next: "argue"
			}
		]
	},
	help: {
		text: "Heh! Of course. It'll all go smooth as rain.",
	},
	argue: {
		text: "Well then, you might be problematic.",
	}
	
};