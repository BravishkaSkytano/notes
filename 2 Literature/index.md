---
title: Literature Notes
created: 2026-03-25T12:25:00
modified: 2026-03-25, 12:27
tags:
  - type/structure
  - structure/about
  - target/starterkit
aliases:
lead: "**Literature Notes** are summaries of sources with key takeaways. They extract useful insights from books, articles, or lectures. Use them for highlighting arguments, summarizing theories, and noting relevant passages."
visual: "![[image.jpg]]"
template_type: Structure
template_version: "1.14"
---

[[1 Fleeting/index|Fleeting Notes]] | [[2 Literature/index|Literature Notes]] | [[3 Permanent/index|Permanent Notes]] | [[About - 4_Project Notes]] | [[_About - 5_Structure Notes]]

<!--  Summarized structure from "lead"-key  in properties section -->

> [!Definition]
> `= this.lead`

> [!Simple Rules]
>- Be extremely selective in what you decide to keep.
>- Write in the context of the source.
>- Always keep a link to the source.

<!-- Main STRUCTURE of my content -->
<!-- Dataview table. Use as example and modify. -->

```dataview
TABLE WITHOUT ID 
	file.link as "2. Literature Notes", 
	(date(today) - file.cday).day as "Days alive" 
FROM "2. Literature"
SORT file.cday asc 
LIMIT 20
```
