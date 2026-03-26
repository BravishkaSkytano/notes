---
title: Project Notes
created: 2024-08-19, 13:37
modified: 2026-03-25, 20:17
tags:
  - type/structure
  - structure/canvas
  - target/starterkit
aliases:
lead: "**Project Notes** are notes related to specific, time-bound projects, containing actionable tasks, research, and drafts. They keep temporary, goal-oriented information separate from permanent knowledge. Use them for managing research for an article, tracking progress on a book, or organizing materials for a presentation."
visual: "![[image.jpg]]"
template_type: Structure
template_version: "1.14"
---

[[1 Fleeting/index|Fleeting Notes]] | [[2 Literature/index|Literature Notes]] | [[3 Permanent/index|Permanent Notes]] | [[4 Project/index|Project Notes]] | [[5_Structure/index|Structure Notes]]

<!--  Summarized structure from "lead"-key  in properties section -->

> [!Definition]
> `= this.lead`

> [!Simple Rules]
>- One project, one folder.
>- Always keep a link to the source.
>- Add a link to the target.

<!-- Main STRUCTURE of my content -->

```dataview
TABLE WITHOUT ID 
	file.link as "4 Project Notes", 
	visual as Visual,
	target as target,
	(date(today) - file.cday).day as "Days alive" 
FROM "4 Project"
SORT file.cday desc
LIMIT 30
```
