let turnerconversation = {
NPCName : "Turner",
			start: {
				text: "Haven't seen you around here. You new?",
				options: [
					{
						text: "Just passing through. Can you tell me anything about this place?",
						next: "area"
					},
					{
						text: "What do you do here?",
						next: "services"
					},
					{
						text: "I need some supplies.",
						next: "supplies"
					}
				]
			},
			area: {
				text: "Well, you picked a rotten time to start. There are strange forces about. Something has happened, and it happened recently.",
				options: [
					{
						text: "Thanks for the warning.",
						next: "start"
					},
					{
						text: "What kind of things are happening?",
						next: "info"
					}
				]
			},
			services: {
				text: "Does it matter? Doesn't seem to change anything going on around here.",
				options: [
					{
						text: "What do you think is happening here?",
						next: "info"
					},
					{
						text: "Gonna just ignore these redflags...",
						next: "start"
					}
				]
			},
			info: {
				text: "Don't know how to explain it. Its almost...I dont know..like our entire reality is fabricated. Like it happened recently.",
				options: [
					{
						text: "I just moved here, so I don't see any of what you are talking about.",
						next: "area"
					},
					{
						text: "...okay?",
						next: "start"
					}
				]
			},
			supplies: {
				text: "I don't have much for you. Look around, take what you need.",
				options: [
					{
						text: "Is this stuff yours?",
						next: "weapons"
					},
					{
						text: "Never mind, I'll find what I need elsewhere.",
						next: "start"
					}
				]
			},
			weapons: {
				text: "Stuff around here doesn't belong to anyone, I suppose.",
				options: [
					{
						text: "Ill take a look around",
						next: "purchase"
					},
					{
						text: "Don't mind if I do",
						next: "purchase"
					},
					{
						text: "Never mind, I'll find what I need elsewhere.",
						next: "start"
					}
				]
			},
			purchase: {
				text: "Good luck with it.",
				options: [
					
					{
						text: "Thanks",
						next: "start"
					}
				]
			}
			};