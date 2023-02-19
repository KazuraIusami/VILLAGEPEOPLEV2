let bogconversation = {
NPCName : "Bog",
			start: {
				text: "Greet'ns. Name is Bog. I make weapon for hunting big meat. Little meat, too, Bog guess.",
				options: [
					{
						text: "Tell me about the local area.",
						next: "area"
					},
					{
						text: "What services do you offer?",
						next: "services"
					},
					{
						text: "I need some supplies.",
						next: "supplies"
					},
					{
						text: "What do you know of the other residents?",
						next: "residents"
					}
				]
			},
			area: {
				text: "Bog not been here long. But Bog see strange man on hill. Bog no know man.",
				options: [
					{
						text: "Thanks for the warning.",
						next: "start"
					}
				]
			},
			services: {
				text: "Bog make big stick. Heavy stick, too.",
				options: [
					{
						text: "What will you take in trade?",
						next: "trade"
					},
					{
						text: "Thanks, but I'm good for now.",
						next: "start"
					}
				]
			},
			trade: {
				text: "Bog have no money. Big boss want money from Bog. Bog need money.",
				options: [
					{
						text: "Fair enough.",
						next: "treatment"
					},
					{
						text: "Who is big boss?",
						next: "bigboss"
					},
					{
						text: "No, I'll take my chances.",
						next: "start"
					}
				]
			},
			treatment: {
				text: "Give moment, for Bog.",
				options: [
					{
						text: "Thanks!",
						next: "start"
					}
				]
			},
			supplies: {
				text: "Bog have shiny rock, dark rock, many other rock. But you no need rock, you need refined rock.",
				options: [
					{
						text: "Got anything that can kill a dragon?",
						next: "weapons"
					},
					{
						text: "What about armor?",
						next: "armor"
					},
					{
						text: "Never mind, I'll find what I need elsewhere.",
						next: "start"
					}
				]
			},
			weapons: {
				text: "Bog have strong reflex. Bog take no balls on face. No dragons here, says Bog.",
				options: [
					{
						text: "Dragon deez b- wha- oh. ",
						next: "purchase"
					},
					{
						text: "No, I need a weapon that can kill the beast.",
						next: "purchase"
					},
					{
						text: "Never mind, I'll find what I need elsewhere.",
						next: "start"
					}
				]
			},
			armor: {
				text: "Bog have little armor. Little for kids. They need 'em.",
				options: [
					{
						text: "I will try on the childs armor",
						next: "purchase"
					},
					{
						text: "Maybe there is something that will fit?",
						next: "purchase"
					},
					{
						text: "Never mind, I'll find what I need elsewhere.",
						next: "start"
					}
				]
			},
			purchase: {
				text: "None in stock. Bring dragon killing material.",
				options: [
					{
						text: "Where would I find that?",
						next: "location"
					},
					{
						text: "No, I don't have that.",
						next: "start"
					}
				]
			},
			location: {
				text: "Bog hear rumor long-nose tribe have access to dragon killing equiptment. Assum'n of course that Dragons are real.",
				options: [
					{
						text: "Goodbye.",
						next: "start"
					}
				]
			},
			bigboss: {
				text: "Bog work for Chief UngaBunga. Bog get pushed for money every day by big boss. Big boss say Bog need to make money for big boss. Bog want to keep Bog money.",
			
				options: [
					{
						text: "What kind of supplies do you have?",
						next: "supplies"
					}
				]
			},
			residents: {
				text: "Bog know of man on hill. Bog hear man called Turner, but no be sure. <br> Bog also hear of Lady-sake hear called Harlot, she no pretty enough to be wife. But Bog hear big boss get in close with the wench.",
			
				options: [
					{
						text:"Have you spoken to a man in the jail?",
						next: "prisoner"
					},
					{
						text: "Anything else?",
						next: "area"
					}
				]
			},
			prisoner: {
				text: "Bog stay away from cell-rooms. Bog no like being in cage. Big boss no put me in cage, as long as Bog make stuff for big boss.",
				
				options: [
					{
						text: "Big Boss?",
						next: "bigboss"
					},
					{
						text: "Do you know anything else about this area?",
						next: "area"
					}
				]
			}
			};
		