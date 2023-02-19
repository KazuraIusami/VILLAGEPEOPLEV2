let ryanconversation = {
	NPCName: "Ryan",
		
		start: {
			text: "Hey do you mind? You are soaking up the bit rate, man.",
			
			options: [
				{
					text: "What do you mean?",
					next: "wallbreak1"
				},
				{
					text: "Who are you?",
					next: "info"
				},
				{
					text: "Bit rate? What are you talking about?",
					next: "wallbreak1"
				}
			]
		},
		wallbreak1: {
			text: "Okay think about it, do you really remember getting here? Try to think about where you were before. Can you remember?",
			
			options: [
				{
					text: "Everyone around town is saying something strange is happening.",
					next: "wallbreak2"
				},
				{
					text: "You seem oddly chill about this whole thing.",
					next: "project"
				}
			]
		},
		wallbreak2: {
			text: "You see this as a little society. You can't see it, but I'm just playing Minecraft. This whole world is just an afterimage. It isn't real.",
			
			options: [
				{
					text: "Minecraft?",
					next: "project"
				},
				{
					text: "So none of this is real?",
					next: "finalwallbreak"
				},
				
			]
		},
		finalwallbreak: {
			text: "Nope. You see that little x in the top right? You can click that. It'll probably kill all the other residents, but I'll still be on Minecraft. lemme save rq",
		
			options: [
				{
					text: "Will I die too?",
					next: "impatient"
				}
			]
		},
		info: {
			text: "Don't worry about it",
		},
		project: {
			text: "Yeah its gonna be a mob farm. Pretty cool.",
		},
		impatient: {
			text: "Dude, I don't know. I'm just trying to play Minecraft dude. Figure it out yourself, good luck to ya.",
		}
			
}