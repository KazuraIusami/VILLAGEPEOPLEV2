let harlotconversation = {
	NPCName : "Harlot",
	
	start: {
		text:"Hello? Hello!? Is there someone there?",
		
		options: [
			{
				text:"Who are you?",
				next: "info"
			},
			{
				text:"*stay quiet*",
				next: "sneak"
			}
		]
	},
	info: {
		text:"Oh thank God! Someone who can finally help me!",
		
		options: [
			{
				text:"Are you in trouble?",
				next: "interrogate"
			},
			{
				text:"I don't think I want to help you.",
				next: "intimidate"
			},
			{
				text:"Of course I will help you! Where are your fears?!",
				next: "simp"
			}
		]
	},
	sneak: {
		text: "Hello? Please, you have to help me!",
		
		options: [
			{
				text: "What is going on here?",
				next: "interrogate"
			},
			{
				text: "Don't come any closer!",
				next: "info"
			},
			{
				text:"*Stay in cover*",
				next: "start"
			},
			{
				text:"Better run.",
				next:"intimidate"
			}
		]
	},
	interrogate: {
		text: "There is something strange going on! I don't remember how I got here! I don't have any real clue what here even is! I am in danger here.",
		
		options: [
			{
				text:"Tell me what you mean.",
				next:"details"
			},
			{
				text:"The other people here are saying the same thing.",
				next:"residents"
			}
		]
	},
	intimidate: {
		text: "I'll kill you! I have to get out of here!",
		
		options: [
			{
				text:"Im sorry, let me try again.",
				next: "info"
			},
			{
				text:"You better tell me whats going on!",
				next: "interrogate"
			}
		]
	},
	details: {
		text:"I really can't explain it...I can't seem to remember anything. Everything feels...new? Like the whole world was snapped into existence only moments ago.",
		
		options: [
			{
				text:"You are running around screaming bloody murder over an existential crisis?",
				next:"furtherdetails"
			},
			{
				text:"Now that you mention it...I can't either.",
				next:"furtherdetails"
			},
			{
				text:"You are crazy, lady!",
				next:"intimidate"
			}
		]
	},
	furtherdetails: {
		text:"It is driving me crazy. But I don't even know if reailty has existed for long enough for there to have been any real time before I wasn't going crazy. How do I know everything I am processing wasn't zapped into my brain mere minutes ago, only giving the illusion of a lifetime.",
	
		options: [
			{
				text:"I want to help you with this.",
				next: "simp"
			},
			{
				text: "I can't help you",
				next: "angry"
			}
		]
	},
	simp: {
		text: "Gah! You are no good at all! Probably just another mindless bot who will say whatever his program says to be with someone like me. I need to talk to someone who actually get it.",
	
		options: [
			{
				text:"I was trying to help you! Why I oughta-!",
				next:"intimidate"
			},
			{
				text:"Yeah like you are so much more sentient that I am",
				next:"angry"
			}
		]
	},
	angry: {
		text:"GET OUT OF HERE!",
		
		options: [
			{
				text:"sorry, let me try again",
				next:"info"
			}
		]
	},
	residents: {
		text: "The others are USELESS! They don't get it at ALL! That dumb blacksmith can't keep his eyes off me, Turner hasn't been right since...well <br> I don't know if there was ever a time he was right.",
	
		options: [
			{
				text: "What about the man in the jail cell?",
				next: "prisoner"
			},
			{
				text: "What about Chief UngaBunga?",
				next: "Unga"
			}
		]
	},
	prisoner: {
		text: "What have you heard? Anything he says is a lie. You should NOT speak to that man. Stay away from him, will you?",
		
		options: [
			{
				text: "..I didn't accuse you of anything?",
				next: "angry"
			}
		]
	},
	Unga: {
		text: "He calls himself chief. I don't know what you've heard, but that man and I are strictly business.",
		
		options: [
			{
				text: "I haven't heard anything, of course you and him aren't involved.",
				next: "simp"
				
			},
			{
				text: "I never mentioned him and you. Posturing, maybe?",
				next: "angry"
			}
		]
	}
};