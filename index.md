---
title: Welcome to the Living Index
description: Welcome to my digital garden. A space for second brain notes, projects, and ideas.
automatic-linker-exclude: true
created: 2026-02-13T15:08:23-05:00
modified: 2026-03-25T11:54:29-04:00
cover: img/covers/logo.jpg
---

![[logo.jpg]]

This is not a library of conclusions.
It’s an index of things I’m still working out.

Ideas live here in draft form. Some are half-formed, some overgrown, some waiting patiently for their season.
I collect them, link them, revisit them, and let them change me over time.

I don’t believe clarity arrives all at once. It accumulates. Slowly.
Through attention, curiosity, and returning to the same thoughts with new eyes.

This garden favors process over polish, learning over certainty, and growth over completion.
Nothing here is final. Everything is alive.

In progress, on purpose.

```dataviewjs 
// Select random quote or idea
let a = Math.random()

if (a < 0.5) {

dv.paragraph(">[!Quote]")

// List of quotes 
let quotes = []; 

// Extract quotes from pages
dv.pages() 
	.where(page => page.quote) 	.forEach(page => { 
		dv.array(page.quote) 
			.forEach(quote => { quotes.push({ 
				message: (quote), 
				page: page }); 
	})}); 

// Select random quote
let text = quotes[Math.floor(Math.random() * quotes.length)] 

dv.paragraph("> " + text.message + " <br>- " 
	+ text.page.author + " <br><br><small>From: " 
	+ text.page.file.link) + "</small>"; 

} else {
 
 dv.paragraph(">[!Remember]-")
 // List of ideas 
 let ideas = []; 

 // Extract ideas from pages
 dv.pages('"3_Permanent" AND #theme/zettelkasten') 
	.where(page => page.lead) 
	.forEach(page => { 
		dv.array(page.lead) 
			.forEach(lead => { ideas.push({ 
				message: (lead), 
				page: page }); 
	})}); 

 // Select random idea
 let text = ideas[Math.floor(Math.random() * ideas.length)] 

 dv.paragraph("> " +
 	"<b>" + text.page.file.name + "</b><br>" +
 	text.message + 
 	" <br><br><small>" + 
 	text.page.file.link +  " - " +
 	text.page.template_type  + ", " +
 	text.page.file.inlinks.length  + " inlinks, " +
 	text.page.file.outlinks.length  + " out, " +
 	text.page.file.etags.length  + " tags, " +
 	text.page.file.tasks.length  + " tasks, " +
 	moment(text.page.file.cday.toString()).format("DD.MM.YYYY") + "." +
 	"</small>"
 	);
 } 
```