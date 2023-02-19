let prisonerconversation = {
	NPCName : "Prisoner",
	
	start: {
		text: "Hey, you! You gotta let me out!",
		
		options: [ 
			{
				text: "Who are you?",
				next: "interrogate"
			},
			{
				text: "Why are you in prison?",
				next: "crime"
			}
		]
	},
	interrogate: {
		text: "I am innocent! I'm being framed! You gotta get me out of here!",
		
		options: [
			{
				text: "Why are you here?",
				next: "crime"
			},
			{
				text: "Who is trying to frame you?",
				next: "conspiracy"
			},
			{
				text: "Rot in here!",
				next: "aggression"
			}
		]
	},
	crime: {
		text: "What does it matter? Im being FRAMED! You have got to get me out of here!",
		
		options: [
			{
				text: "I can't believe you until you tell me what is happening.",
				next: "conspiracy"
			},
			{
				text: "No way. If you won't tell me what you did, then you are as guilty as they come!",
				next: "interrogate"
			},
			{
				text: "You are gonna see this cell for the rest of your life!",
				next: "aggression"
			}
		]
	},
	conspiracy: {
		text: "Everyone is trying to frame me. Most of all that bitch Harlot! And the chief is just playing right into her hands! The best that I can hope for is for someone like yourself, perhaps a little nicer, to help me out of this cell.",
		
		options: [
			{
				text: "What are they accusing you of doing?",
				next: "crime"
			},
			{
				text: "Why do you think they want to frame you?",
				next: "explaination"
			}
		]
	},
	explaination: {
		text: "I can't be sure exactly why..but I just know it. I don't remember anything, they must have drugged me! I don't even remember my life before this dingy cell...Please. You have to get me out of here.",
	
		options: [
			{
				text: "How can you be sure about any of this conspiracy if you don't even know how you got here!",
				next: "aggression"
			},
			{
				text: "I don't know how to help you..",
				next: "useless"
			}
		]
	},
	aggression: {
		text: "You are just as bad as them! I will get out of here, and you WILL be sorry!",
		
		options: [
			{
			text: "I couldn't even help you if I tried",
			next: "useless"
			}
		]
	},
	useless: {
		text: "You're USELESS! Leave me be, I got important stuff to do."
	}
};