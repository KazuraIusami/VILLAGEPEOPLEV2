let ungaconversation = {
	NPCName: "UngaBunga",
	
		start: {
			text: "And who are you then? Haven't seen the likes of you around here.",
			
			options: [
				{
					text: "Just passing through.",
					next: "passingthrough"
				},
				{
					text: "Who am I? No, who are you??",
					next: "ungalore"
				}
				
			]
		},
		passingthrough: {
			text: "A wanderer? In these parts? Something odd is afoot. But I don't blame you for being here, perhaps it isn't your fault. Although...perhaps it is.",
			
			options: [
				{
					text:"Enough about me, who are you?",
					next:"ungalore"
				},
				{
					text:"Why does everyone keep saying something strange is happening?",
					next:"strange"
				}
			
			]
		},
		ungalore: {
			text: "ME?? Are you kidding? I am CHIEF UNGABUNGA! Everyone here bows to me, and only me. Which begs the question: why are you different?",
			
			options: [
				{
					text: "Who assigned you chief?",
					next: "wait"
				},
				{
					text: "You seem a bit full of yourself",
					next: "strange"
				},
				{
					text: "People keep saying strange things are happening around here",
					next: "strange"
				}
			]
		},
		strange: {
			text: "Yeah, I assume so. But I don't know much more than anyone else. Most of them are saying something about reality being snapped into existence. I hear them, but that can't be whats happening. It must be something else. ",
		
			options: [
			
				{
					text: "How long have these things been happening?",
					next: "wait"
				},
				{
					text:"I don't know much about this place.",
					next:"start"
				}
			]
		},
		wait: {
			text: "Ah, well everything started about..uh... I have been in charge for some time now. How long, I cannot say. I don't remember there being anyone in charge before me.",
		
			options: [
				{
					text:"People are saying strange things are happening around here.",
					next: "strange"
				},
				{
					text:"Who are you?",
					next:"ungalore"
				}
			]
		}
};